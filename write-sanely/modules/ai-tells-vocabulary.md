# AI Tells: Vocabulary

Use this module for phrase-level cleanup. Do not treat the tables as blind bans. If a flagged word is the precise term in context, keep it.

## Matching Rule

Match normal variants unless the variant has a distinct legitimate meaning:

- `delve` includes `delves`, `delving`, `delved`
- `leverage` includes `leverages`, `leveraging`, `leveraged`
- `meticulous` includes `meticulously`
- `genuine` includes `genuinely`, except where it means authentic rather than an empty intensifier

## Tier 1: Usually Replace

These are strong AI tells in ordinary prose:

| Replace | Prefer |
|---|---|
| delve / dive into / deep dive | examine, analyze, explain, look at |
| landscape | field, market, area, system, specific domain noun |
| tapestry | name the actual complexity |
| realm | field, area, domain |
| paradigm | model, approach, assumption set |
| embark | start, begin |
| robust | strong, reliable, stable, validated |
| comprehensive | full, complete, broad, detailed |
| cutting-edge | current, new, advanced, specific method |
| leverage | use |
| pivotal | important, central, necessary |
| underscores | shows, highlights, indicates |
| meticulous | careful, detailed, precise |
| seamless | smooth, integrated, without manual transfer |
| game-changing | name what changed |
| utilize | use |
| vibrant / thriving / bustling | give evidence or cut |
| intricate / complexities | name the specific difficulty |
| holistic | full, end-to-end, system-level |
| actionable | practical, specific, usable |
| impactful | effective, measurable, consequential |
| synergy | name the combined effect |
| interplay | relationship, interaction, feedback |
| serves as | is |
| features / boasts | has, includes |
| at its core | cut |

Example:

> This robust framework leverages AI to unlock a holistic climate-risk ecosystem.

Fix:

> The model estimates flood loss by combining parcel elevation, building footprint, replacement cost, and local depth-damage curves.

## Tier 2: Flag In Clusters

One may be fine. Two or more in the same paragraph usually means the prose is floating.

| Watch | Prefer |
|---|---|
| harness | use |
| navigate | handle, work through |
| foster | build, support |
| elevate | improve |
| unleash | enable, release |
| streamline | simplify, speed up |
| empower | allow, enable |
| bolster | support, strengthen |
| spearhead | lead |
| resonate | matter to, appeal to |
| revolutionize | change, replace, reduce, increase |
| facilitate | enable, help |
| underpin | support, form the basis of |
| nuanced | specific, qualified |
| crucial | necessary, important |
| multifaceted | name the facets |
| ecosystem | system, network, market, supply chain |
| myriad / plethora | many, several, a number |
| encompass | include, cover |
| catalyze | start, trigger, accelerate |
| reimagine | redesign, rethink |
| transformative | say what changed |
| cornerstone | foundation, core part |
| paramount | most important |
| poised to | likely to, ready to, expected to |
| burgeoning / nascent | new, growing, early-stage |

Example:

> These tools empower researchers to navigate a multifaceted ecosystem and catalyze transformative innovation.

Fix:

> These tools help analysts reconcile unemployment claims across states that report layoffs under different industry codes.

## Tier 3: Flag By Density

These words are normal. Flag when they pile up without specifics:

- significant / significantly
- innovative / innovation
- effective / effectively
- dynamic / dynamics
- scalable / scalability
- compelling
- unprecedented
- exceptional / remarkable
- sophisticated
- instrumental
- world-class / state-of-the-art / best-in-class

Fix by adding the missing fact, number, comparison, or mechanism.

Example:

> The platform produced significant improvements in scalability.

Fix:

> The new query planner processed 2.1 billion log records in 18 minutes, compared with 140 million records in the prior nightly job.

## Template Phrases

Rewrite these patterns:

- "a [adjective] step forward for [noun]"
- "a [adjective] step toward [adjective] AI infrastructure"
- "whether you're X or Y"
- "in today's rapidly evolving..."
- "in an era where..."
- "it's worth noting that"
- "at the end of the day"
- "when it comes to"
- "in conclusion"
- "the future looks bright"
- "only time will tell"

Example:

> In today's rapidly evolving AI landscape, this work marks a pivotal step forward for climate-risk modeling.

Fix:

> The model updates flood-depth estimates at 100-meter resolution, but the paper does not test whether those estimates improve insurance pricing or evacuation decisions.
