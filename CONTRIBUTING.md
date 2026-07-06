# Contributing

Thanks for helping improve `write-sanely`.

This repo is a writing skill for agents. Contributions should make the skill better at auditing, revising, and explaining prose that is vague, over-polished, uncheckable, structurally weak, or bad AI-shaped.

## The Most Helpful Contribution

Submit examples of bad writing as GitHub issues.

Even if you do not know how to fix the skill, a concrete example is useful. Good examples help test whether `write-sanely` catches the right problem, preserves the right meaning, and suggests a rewrite that would help a cold reader.

When opening an issue for a writing example, include as much of this as you can:

- The original passage, if you have permission to share it.
- The audience and context.
- What feels wrong, unclear, generic, performative, or uncheckable.
- What a better version should preserve.
- Any privacy, attribution, or anonymization constraints.

Do not submit private, confidential, or personally identifying text unless it has been fully anonymized.

## Pull Requests Should Include Examples

Most PRs should include writing examples that show why the change is needed.

This is especially important for changes to `write-sanely/SKILL.md` or modules under `write-sanely/modules/`. Pair the rule change with at least one example that shows the behavior you want:

- A bad passage the current skill handles poorly.
- The failure mode you want the skill to catch.
- A better rewrite, critique, or expected behavior.

Small packaging, typo, link, or CI fixes do not need writing examples.

## Good Contributions

Good contributions probably do one of these:

- Improve `write-sanely/SKILL.md` or a module under `write-sanely/modules/`.
- Add or refine concrete writing examples.
- Fix broken links, unclear install docs, or packaging/CI issues.
- Report cases where the skill gives bad advice, over-edits, misses an obvious issue, or damages meaning.

## Before Opening A PR

Run:

```sh
npm install
npm run validate
```

The validator checks skill metadata, local Markdown links, and module references.

## Style For Skill Changes

Keep the skill practical and specific.

Prefer:

- Concrete rewrite rules over vague taste advice.
- Examples that show before/after behavior.
- Preserving meaning over making prose smoother.
- Narrow module updates over broad rewrites.

Avoid:

- Generic "sound more human" advice.
- Simple banned-word lists without context.
- Rules that erase technical detail or author voice.
- Adding new vocabulary before it has proved useful.

## Repo Notes

The runtime skill lives in `write-sanely/`.

`package.json` is for validation and release tooling only. It is not how users install the skill.

`write-sanely-og/`, if present locally, is a personal reference copy and should not be edited or included in PRs.
