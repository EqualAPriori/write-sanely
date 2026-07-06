# Severity

Use severity to decide what to fix first. A quick pass should fix P0 and P1. A full pass should also consider P2.

## P0: Credibility Killers

Fix immediately.

- Chatbot artifacts: "Great question," "Certainly," "I hope this helps."
- Cutoff disclaimers: "As of my last update," "I do not have access to real-time data."
- Leaked tool artifacts: placeholder text, citation tokens, AI-tool URL parameters.
- Vague attribution used as evidence: "Studies show," "Experts agree," without a source.
- Process leakage in finished prose: "as requested above," "this revised version," "with the title removed."
- Technical claims missing the object, source, or boundary needed to check them.

Example:

> Recent work shows that congestion pricing is transforming urban mobility.

Fix:

> In the six-month pilot, weekday car entries into the priced zone fell 14 percent relative to the same months the prior year.

## P1: Obvious AI Smell

Fix before publication.

- Inflated vocabulary clusters: delve, leverage, robust, pivotal, holistic, seamless, transformative.
- Self-commentary: "this section shows," "the argument now turns," "the figure argues."
- False contrast: "not X, but Y" when X was never claimed.
- Significance labels: "the interesting part," "the key insight," "a quiet scandal."
- Hedge stacks: "could potentially," "may eventually," "might ultimately."
- Formulaic openings: "In today's rapidly evolving..."
- Generic closers: "the future looks bright," "only time will tell."
- Synonym cycling that avoids repeating the clearest word.
- Parenthetical dumps that hide the main evidence.

Example:

> The key insight is that the ecosystem is not just software, but a complex interplay of data, tools, and validation.

Fix:

> The fraud model depends on two signals the vendor does not control: bank-confirmed chargebacks and merchant-level refund histories.

## P2: Style and Polish

Fix when time allows or when density is high.

- Overuse of em dashes, bolding, title case, or symmetrical bullets.
- Uniform paragraph length.
- Too many headings in short text.
- Mild transition clutter: moreover, furthermore, additionally.
- Occasional weak intensifiers: truly, genuinely, notably, importantly.
- One-off metaphors that decorate more than they explain.

Example:

> Importantly, this finding underscores a significant challenge.

Fix:

> The finding identifies a specific constraint: the model reduces false positives for high-volume accounts, but recall falls for accounts with fewer than 20 monthly transactions.

## Judgment Calls

Do not flag mechanically. Some patterns are legitimate in context:

- A technical paper may need hedges where uncertainty is real.
- Documentation may need lists and repeated labels.
- A social post may use one rhetorical question or a few bold hooks.
- A metaphor can help if it maps a real mechanism and returns quickly to the literal claim.

When unsure, explain the tradeoff instead of forcing a rewrite.
