# Technical and Review Prose

Use this module for scientific, analytical, policy, grant, review-article, or expert-audience prose. The standard is not "does this sound human?" first. The standard is: can a skeptical reader check the claim from the page?

## Master Diagnostic

Ask sentence by sentence:

> Is this doing the argument's work, or the writer's self-presentation work?

Argument work:

- defines a term
- names a model, metric, dataset, material, method, instrument, or source
- states a mechanism
- gives a number, baseline, denominator, unit, or time horizon
- marks a boundary condition
- handles a real objection
- moves the logic forward

Self-presentation work:

- tells the reader the result is interesting, careful, honest, nuanced, or important
- narrates the section's arc
- announces balance or sophistication
- uses a clever line where a mechanism belongs
- prefaces care instead of stating scope

Before:

> The conclusion, phrased as carefully as possible, is that the replacement fails.

After:

> In this model, the replacement fails once less than half of the target base generates taxable flow.

## The Checkability Standard

For each major claim, check whether the reader can identify:

- the central claim
- the mechanism
- the object being measured or modeled
- the source or evidence
- the baseline or comparison class
- the assumptions and scope
- what would make the claim false

Before:

> Recent work shows a large improvement in clinical AI.

After:

> In the external validation study, the sepsis model improved AUROC from 0.71 to 0.78, but calibration worsened for patients over 80; the result supports triage ranking, not autonomous diagnosis.

## Put The Technical Object On The Page

Every technical claim has an object: model, metric, dataset, legal rule, parameter, threshold, material, equation, algorithm, instrument, or comparison class. Name it when it matters.

Before:

> One ratio decides the result.

After:

> The design choice turns on the ratio of expected growth to return volatility, evaluated against two threshold values in the model.

Before:

> The framework captures the whole system.

After:

> The model combines corporate tax, dividend tax, progressive brackets, valuation discounts, and holding-company routing in a calibrated portfolio-dynamics model.

## Separate Claim Types

Do not let one sentence slide between epistemic categories. Separate:

- formal result: true within stated assumptions
- calibration or measurement: estimated from data and sensitive to inputs
- judgment: choice of metric, objective, or value
- recommendation: what should happen

Before:

> The model proves that the replacement policy is bad.

After:

> The threshold exists in the model. Whether a country lies below it depends on measurement. Whether that should drive policy depends on the objective function.

## Let Facts Carry Significance

Do not announce that something is remarkable, scandalous, crucial, or the key insight before showing the evidence.

Before:

> The second finding is the quiet scandal.

After:

> Two designs with the same aggregate inequality score can leave the top group with shares that differ by a factor of eight.

If the fact is strong, the fact will do the work. If the fact is weak, the label will not save it.

## Put Caution Inside The Claim

Avoid attitude-prefaces:

- "phrased as carefully as I can"
- "stated honestly"
- "to be clear"
- "without flinching"
- "make no mistake"

Replace them with scope, assumptions, magnitudes, error bars, or sources.

Before:

> To be clear, this does not mean language models solve legal review.

After:

> The benchmark tests issue spotting in short contracts, not privilege review, negotiation risk, or enforceability under state law.

## Write For The Cold Reader

A standalone piece should not depend on prior posts, draft history, project lore, internal nicknames, or callbacks.

Before:

> As regular readers will remember from the elephant post, the same issue returns here.

After:

> A previous post argued that one claimed valuation effect does not appear in the benchmark model. The same model creates a second question here: whether the proposed replacement reaches the same tax base.

Cold-reader checks:

- Does every "this," "that," "former," and "latter" resolve nearby?
- Is every callback glossed in one clause?
- Does every contrast answer something actually stated?
- Does each paragraph add a fact, mechanism, limit, or consequence?

## Handle Metaphor As A Technical Tool

Metaphor is allowed when it preserves the structure of the claim. It fails when it adds mood or borrowed authority.

Before keeping a metaphor, ask:

- What exact relationship does it map?
- Would an expert in the source domain accept the term?
- Is the literal claim stated nearby?
- If the metaphor is cut, what definition must be added back?

Before:

> Standards act as the nervous system of the ecosystem.

After:

> Standards let instruments, models, and automation software exchange data without custom integration for each lab.

Pattern:

1. State the literal claim.
2. Add one short analogy only if it helps.
3. Return to variables, objects, or mechanisms.

## Count Thesis Restatements

A thesis should gain force from what comes between setup and close. If the same claim appears more than twice in two pages, keep the strongest instance and cut the echoes.

Before:

> The middle of the system has many suppliers, while the two ends remain proprietary. This shows that the middle is reusable but the ends are not.

After:

> Payment processors can route checkout transactions without seeing a bank's full credit file. That separation is why payment access broadens faster than underwriting access.

## Promote Parenthetical Evidence

Parentheses signal secondary information. If the parenthetical carries the strongest evidence, the structure is lying to the reader.

Before:

> The study's claims were later narrowed (the effect fell after county fixed effects, and the sample excluded two high-incidence states).

After:

> Later re-analyses narrowed the claims. The estimated effect fell from 12 percent to 3 percent after county fixed effects. The public-use sample also excluded two high-incidence states.

## Keep Evidence Format Consistent

Similar evidence should receive similar treatment. If one correction gets a full sentence and another is hidden in a parenthetical, revise.

Check:

- Are comparable numbers given with comparable units and baselines?
- Are citations specific enough to find?
- Are limitations presented in the same register across sections?
- Are critiques integrated into sentences instead of dumped into asides?

## Scientific Critique

Corrective writing should be measured, specific, and falsifiable. Do not soften critique by burying it in hedges. Do not sharpen critique with prosecutorial language when numbers can do the work.

Before:

> The tutoring trial failed because the effect was lower and the outcome was overstated.

After:

> The trial showed higher worksheet completion, not durable learning gains. The preregistered math-score effect was not distinguishable from zero, and the reported improvement came from an unblinded engagement survey.

Separate:

1. result
2. interpretation
3. consequence

## Final Technical Pass

Before returning a rewrite, make sure the draft answers:

- What is happening?
- Who or what is involved?
- What evidence supports it?
- What assumptions limit it?
- What changes for the reader's understanding?
