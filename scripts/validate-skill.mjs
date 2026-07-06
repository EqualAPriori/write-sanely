import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const skillPath = path.join(rootDir, "write-sanely", "SKILL.md");
const expectedFrontmatter = {
  name: "write-sanely",
  version: "1.0.0",
  license: "MIT",
};

const errors = [];

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function relativePath(filePath) {
  return path.relative(rootDir, filePath);
}

function parseFrontmatter(markdown, filePath) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    errors.push(`${relativePath(filePath)} is missing YAML frontmatter`);
    return {};
  }

  return Object.fromEntries(
    match[1]
      .split("\n")
      .map((line) => line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/))
      .filter(Boolean)
      .map((match) => [match[1], match[2].trim()]),
  );
}

function validateFrontmatter() {
  if (!existsSync(skillPath)) {
    errors.push("write-sanely/SKILL.md does not exist");
    return;
  }

  const frontmatter = parseFrontmatter(readText(skillPath), skillPath);
  for (const field of ["name", "description", "version", "license"]) {
    if (!frontmatter[field]) {
      errors.push(`write-sanely/SKILL.md frontmatter is missing ${field}`);
    }
  }

  for (const [field, expected] of Object.entries(expectedFrontmatter)) {
    if (frontmatter[field] && frontmatter[field] !== expected) {
      errors.push(
        `write-sanely/SKILL.md frontmatter ${field} should be ${expected}, got ${frontmatter[field]}`,
      );
    }
  }
}

function markdownFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".git" || entry.name === "node_modules") {
        return [];
      }
      return markdownFiles(fullPath);
    }
    return entry.isFile() && entry.name.endsWith(".md") ? [fullPath] : [];
  });
}

function stripAnchorsAndQuery(href) {
  return href.split("#")[0].split("?")[0];
}

function isExternalOrSpecialLink(href) {
  return (
    /^[a-z][a-z0-9+.-]*:/i.test(href) ||
    href.startsWith("#") ||
    href.startsWith("mailto:")
  );
}

function validateLocalMarkdownLinks() {
  const linkPattern = /!?\[[^\]]*]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  for (const filePath of markdownFiles(rootDir)) {
    const markdown = readText(filePath);
    for (const match of markdown.matchAll(linkPattern)) {
      const href = match[1].replace(/^<|>$/g, "");
      if (!href || isExternalOrSpecialLink(href)) {
        continue;
      }

      const target = stripAnchorsAndQuery(decodeURIComponent(href));
      if (!target) {
        continue;
      }

      const targetPath = path.resolve(path.dirname(filePath), target);
      if (!existsSync(targetPath)) {
        errors.push(
          `${relativePath(filePath)} links to missing local path: ${href}`,
        );
      }
    }
  }
}

function validateSkillModuleInventory() {
  const modulesDir = path.join(rootDir, "write-sanely", "modules");
  if (!existsSync(modulesDir) || !statSync(modulesDir).isDirectory()) {
    errors.push("write-sanely/modules does not exist");
    return;
  }

  const skillMarkdown = readText(skillPath);
  const linkedModules = new Set(
    [...skillMarkdown.matchAll(/\]\((modules\/[^)#?]+\.md)/g)].map(
      (match) => match[1],
    ),
  );

  for (const linkedModule of linkedModules) {
    const modulePath = path.join(rootDir, "write-sanely", linkedModule);
    if (!existsSync(modulePath)) {
      errors.push(`write-sanely/SKILL.md links to missing ${linkedModule}`);
    }
  }

  const moduleFiles = readdirSync(modulesDir)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => `modules/${fileName}`);

  for (const moduleFile of moduleFiles) {
    if (!linkedModules.has(moduleFile)) {
      errors.push(`write-sanely/SKILL.md does not reference ${moduleFile}`);
    }
  }
}

validateFrontmatter();
validateLocalMarkdownLinks();
validateSkillModuleInventory();

if (errors.length > 0) {
  console.error("Skill validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Skill validation passed.");
