---
name: write-sanely
description: Audit and revise prose so it reads as authored, specific, checkable, and natural rather than AI-generated or over-polished. Use when asked to make writing sound human, remove AI-isms, clean up machine-written prose, improve technical or scientific writing, revise captions, reduce self-commentary, or rewrite in a particular human voice.
version: 1.0.0
license: MIT
---

# write-sanely

Use this skill to audit, rewrite, or edit prose that feels machine-generated, over-polished, self-explaining, vague, or hard to verify.

The governing order is:

1. Make the writing checkable.
2. Remove self-presentation and process leakage.
3. Fix structure, rhythm, and evidence flow.
4. Then clean up vocabulary and formatting tells.

Do not turn this into a word-substitution pass. If the claim, mechanism, source, baseline, or scope is missing, fix that before replacing surface-level AI phrases.

## First Steps

Always read:

- [workflow.md](modules/workflow.md)
- [severity.md](modules/severity.md)

Then load only the modules needed for the task.

## Module Router

Use [technical-review-prose.md](modules/technical-review-prose.md) for scientific, analytical, policy, review-article, technical-blog, grant, or expert-audience prose.

Use [figures-captions.md](modules/figures-captions.md) when editing captions, figure callouts, diagrams, maps, charts, tables, visual encodings, or prose that keeps narrating a figure.

Use [ai-tells-vocabulary.md](modules/ai-tells-vocabulary.md) for full AI-ism audits, phrase-level cleanup, or text with obvious generated vocabulary.

Use [ai-tells-structure.md](modules/ai-tells-structure.md) for paragraphs that are fluent but feel modular, repetitive, over-balanced, self-labeling, or structurally unanchored.

Use [formatting.md](modules/formatting.md) for Markdown, headings, bullet lists, bolding, em dashes, title case, social formatting, or visually structured drafts.

Use [context-profiles.md](modules/context-profiles.md) when the audience or genre matters: LinkedIn, blog, technical blog, review paper, investor email, docs, or casual notes.

Use [voice-profiles.md](modules/voice-profiles.md) when the user names a voice, provides a writing sample, or asks for casual, professional, technical, warm, or blunt prose.

Use [artifacts-and-hard-fingerprints.md](modules/artifacts-and-hard-fingerprints.md) for pasted chatbot output, placeholders, leaked citations, chain-of-thought artifacts, cutoff disclaimers, or AI-tool URL parameters.

Use [rewrite-playbooks.md](modules/rewrite-playbooks.md) when a paragraph needs rebuilding rather than local cleanup.

## Modes

Default to `rewrite` unless the user asks otherwise.

`detect`: flag issues only. Group by severity and say which are clear problems versus judgment calls.

`rewrite`: flag the main issues, rewrite the text, summarize what changed, and run a second-pass audit.

`edit`: when the user points to a file and asks for direct cleanup, edit the file in place. Make minimal targeted edits. Preserve already-human passages.

## Non-Negotiables

- Preserve meaning, factual claims, technical detail, citations, and constraints.
- Do not rewrite quoted material, code blocks, examples of bad writing, or text attributed to someone else unless the user explicitly asks.
- Do not sand away all personality. Human writing can be uneven, opinionated, clipped, funny, or idiosyncratic.
- Prefer concrete nouns, mechanisms, numbers, baselines, and sources over abstract polish.
- If a passage is already strong, say so and make only necessary cuts.

## Tiny Example

Before:

> This section reveals a nuanced and important shift in the innovation landscape.

After:

> A payroll-tax replacement reaches wages immediately, but it misses retained business income until owners distribute or realize the gains.

The revision removes self-importance and names the mechanism. The original sentence is vacuous because the reader still has no idea what nuanced and important shift happened. In short, the original sentence has no practical or useful implications.
