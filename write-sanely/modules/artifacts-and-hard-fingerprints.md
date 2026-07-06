# Artifacts and Hard Fingerprints

Use this module when text looks pasted from a chatbot, generated draft, or AI search tool. These issues are more severe than ordinary style tells.

## Chatbot Openers and Closers

Remove:

- "Certainly!"
- "Absolutely!"
- "Great question!"
- "I hope this helps!"
- "Feel free to reach out"
- "Let me know if you need anything else"

Before:

> Great question! In this article, we will explore how AI changes hospital staffing.

After:

> A staffing model can predict next-week bed demand, but it cannot add nurses to a shift schedule without licensing, overtime, and unit-coverage constraints.

## Cutoff and Access Disclaimers

Remove or replace with sourced information:

- "As of my last update"
- "I do not have access to real-time data"
- "Based on available information"
- "Specific details are limited"

Before:

> While specific details are limited based on available information, the platform appears promising.

After:

> The public filing reports monthly active users and net revenue retention, but not cohort-level churn.

## Chain-of-Thought and Reasoning Leaks

Remove:

- "Let me think step by step"
- "Breaking this down"
- "To approach this systematically"
- "Step 1:"
- "Here's my thought process"
- "First, let's consider"

Before:

> To approach this systematically, first let's consider the role of data.

After:

> Data access determines which parts of the workflow can be reused across organizations.

## Placeholders

Visible placeholders are publishing bugs. Fill them with real content or delete the sentence.

Flag:

- `[Your Name]`
- `[INSERT SOURCE URL]`
- `[Describe the specific section]`
- `2025-XX-XX`
- `<!-- Add citation if available -->`

Before:

> Recent work by [INSERT SOURCE] supports this conclusion.

After:

> Delete the sentence unless a real source is available.

## Citation Markup Leaks

Remove leaked tokens from chat tools:

- `citeturn0search0`
- `contentReference[oaicite:0]{index=0}`
- `oai_citation`
- `[attached_file:1]`
- `grok_card`

If the citation matters, replace the token with a real reference.

## AI-Tool URL Parameters

Strip AI-tool tracking parameters from URLs:

- `utm_source=chatgpt.com`
- `utm_source=copilot.com`
- `utm_source=openai`
- `utm_source=claude.ai`
- `utm_source=perplexity.ai`
- `referrer=grok.com`

Keep the underlying URL if it is meaningful.

## Sycophancy and Acknowledgment Loops

Remove praise and prompt restatement:

- "You're absolutely right"
- "That's an insightful observation"
- "You're asking about..."
- "To answer your question..."
- "The question of whether..."

Before:

> You're asking about whether AI can transform macroeconomic forecasting. That's a great question.

After:

> AI changes nowcasting faster than it changes the revisions, lagged indicators, and judgment calls built into official forecasts.

## Self-Reference Escape Hatch

When writing about AI-writing patterns, do not flag quoted examples, code blocks, or explicitly illustrative bad text. Only flag the author's own prose.
