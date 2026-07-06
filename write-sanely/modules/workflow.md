# Workflow

Use one of three modes: `detect`, `rewrite`, or `edit`.

## Detect Mode

Use when the user asks to scan, audit, flag only, detect AI-isms, or avoid changing the text.

Return:

1. **Issues found** grouped by severity.
2. **Assessment** explaining which issues are definite fixes and which are judgment calls.

Do not rewrite the text in detect mode unless the user asks for examples.

## Rewrite Mode

Use by default when the user asks to clean up, humanize, rewrite, polish, or improve prose.

Process:

1. Identify the main issues.
2. Rewrite the text while preserving meaning and factual content.
3. Summarize meaningful changes.
4. Run a second-pass audit on the rewritten text.
5. If anything still reads as AI-generated, fix it before returning.

Return:

1. **Issues found**
2. **Rewritten version**
3. **What changed**
4. **Second-pass audit**

Keep the report proportional. For a short paragraph, one or two issue bullets may be enough.

## Edit Mode

Use when the user names a file and asks you to fix or clean it directly.

Rules:

- Read the file first.
- Make minimal, targeted edits.
- Preserve already-human passages.
- Do not edit quoted material, code blocks, references, examples of bad writing, or attributed text unless asked.
- For large files, confirm the section before editing unless the user already scoped the work.
- Re-read the edited spans and verify that the flagged problems are resolved.

Return:

1. **Edits made** with brief before/after descriptions.
2. **Verification** stating what was checked and what was deliberately left alone.

## When To Rewrite From Scratch

Recommend a rebuild rather than a patch when the text has all three:

- five or more vocabulary or phrase hits across categories
- three or more structural categories triggered
- uniform rhythm or paragraph structure throughout

Do not preserve an AI-generated structure just because each sentence can be locally patched.

Example:

Before:

> In today's rapidly evolving climate-risk landscape, this section explores the pivotal role of predictive models, highlighting how they can unlock transformative opportunities across the insurance ecosystem.

Patch-level fixes would remove obvious phrases, but the sentence still has no claim. Rebuild it:

> Flood models can update rainfall forecasts every hour, but insurers still need parcel-level elevation data, claims history, and local drainage assumptions before pricing risk.
