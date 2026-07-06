# Context Profiles

Context sets how strict to be for a genre. If the user does not specify context, infer it from cues and say which profile you are using when it affects judgment.

## Profiles

`review-paper`: Scientific or scholarly review prose. Highest priority: checkability, evidence, scope, and measured claims. Use `technical-review-prose.md` and `figures-captions.md` when relevant.

`technical-blog`: Long-form technical explanation. Jargon is allowed when defined. Lists and tables are allowed when genuinely useful. Avoid decorative structure.

`blog`: Default long-form prose. Apply most rules at normal strictness.

`linkedin`: Short-form social. Fragments, hooks, and light formatting are more acceptable. Still flag generic endorsement closers, hashtag stuffing, and inflated claims.

`investor-email`: High-trust persuasive prose. Extra strict on promotional language, vague traction claims, and significance inflation.

`docs`: Documentation, README, guides, API references. Clarity beats voice. Lists, repeated labels, and direct imperatives are often appropriate.

`casual`: Slack messages, internal notes, quick replies. Catch only the worst artifacts and obvious stiffness.

## Auto-Detection Cues

| Cue | Profile |
|---|---|
| citations, figures, model assumptions, scholarly tone | `review-paper` |
| code blocks, APIs, architecture, benchmarks | `technical-blog` |
| salutation plus fundraising or business ask | `investor-email` |
| step-by-step instructions, parameters, README shape | `docs` |
| under 300 words plus hashtags or mentions | `linkedin` |
| no strong cue | `blog` |

## Strictness Notes

`review-paper`:

- Strict on checkability, figure prose, source specificity, baselines, and scope.
- Relaxed on some technical terms that are precise in context.
- Avoid first-person unless the venue permits it.

Example:

> This framework offers a holistic view of the ecosystem.

Fix:

> The review separates the system into four layers: public data, models, automated experimentation, and production validation.

`technical-blog`:

- Technical terms can stay when they name real mechanisms.
- `robust`, `comprehensive`, `ecosystem`, `leverage`, `underpin`, and `streamline` may be legitimate technical terms, but still flag them when used as filler.

`linkedin`:

- One hook or rhetorical question may be fine.
- More than five hashtags is a strong bot signal.
- Generic closers such as "this one is worth your time" should be replaced with a specific reason.

`docs`:

- Do not over-humanize documentation.
- Keep concise labels, lists, and imperative instructions when they help users complete a task.

`casual`:

- Do not over-edit.
- Preserve contractions, fragments, and ordinary conversational rhythm.

## Context Overrides

When context and voice disagree, choose the stricter rule if trust or clarity is at stake.

Example: a warm voice in docs can still address the reader directly, but it should not add decorative empathy or storytelling before instructions.
