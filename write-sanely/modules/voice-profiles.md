# Voice Profiles

Voice sets how the prose should sound. Context sets how strict to be for the audience. If the user provides a writing sample, match the sample before applying a named voice.

## Sample Calibration

When matching a sample, look for:

- average sentence length
- paragraph length
- contraction rate
- first-person use
- favorite words and phrases
- tolerance for fragments
- level of technical vocabulary
- how the writer opens and closes paragraphs

Do not "upgrade" the writer's vocabulary. If they write "stuff" and "things," keep that register when it fits.

## Casual

Targets:

- contractions throughout
- short average sentences
- fragments allowed
- low jargon
- first person or concrete anecdote where appropriate
- warm hedges allowed when natural

Before:

> It is important to note that this approach may not be optimal for all teams.

After:

> This will not fit every team.

## Professional

Targets:

- active voice
- concrete claim in each paragraph
- explicit ask or implication
- low tolerance for hedging
- varied sentence length

Before:

> We believe there may be an opportunity to explore a potential collaboration.

After:

> We should test a collaboration around shared benchmark data this quarter.

## Technical

Targets:

- one idea per sentence unless the relation matters
- plain copulatives where possible: "is," "has," "uses"
- define jargon on first use
- tables and lists only when content is genuinely list-shaped
- imperative mood for instructions

Before:

> The system serves as a robust mechanism for facilitating seamless data exchange.

After:

> The system converts instrument logs into the shared schema before model training.

## Warm

Targets:

- direct address where appropriate
- medium cadence
- no performative empathy
- cut intensifiers in favor of stronger verbs

Before:

> I completely understand how challenging this can be, and I genuinely hope this helps.

After:

> This part is frustrating because the error message points at the caller, but the schema mismatch is in the payload.

## Blunt

Targets:

- lead with the claim
- short declaratives
- near-zero padding
- low hedging
- no forced rule of three

Before:

> It is worth considering whether this section could potentially benefit from a more focused structure.

After:

> This section has no controlling claim.

## Combining Voice With Context

Voice is not permission to violate the genre.

- `technical` voice in `casual` context can still prefer plain verbs.
- `warm` voice in `docs` should not add empathy before instructions.
- `blunt` voice in a `review-paper` should still preserve evidence and scope.
- `professional` voice in `linkedin` can use fragments, but not generic hype.
