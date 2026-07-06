# Formatting

Use this module for Markdown, headings, bullets, social formatting, and visual polish that reads as machine-generated.

## Em Dashes

Target zero in most edited prose. Hard maximum: one per 1,000 words unless the genre is casual or social.

Fix with commas, parentheses, periods, or a rewritten sentence.

Before:

> The model is fast — but validation remains slow.

After:

> The model is fast. Validation remains slow.

## Bold Overuse

Bold should not carry the argument. Use at most one bolded phrase per major section, and often none.

Before:

> **The key challenge** is **data access**, not **model quality**.

After:

> Data access, not model quality, is the constraint.

## Emoji Headers

Remove emoji from headings in serious prose. Social posts may use one or two emoji sparingly at line ends.

Before:

> ## 🚀 Key Takeaways

After:

> ## Key takeaways

## Title Case Headings

Use sentence case for subheadings unless the document's house style requires title case.

Before:

> ## Strategic Negotiations And Key Partnerships

After:

> ## Strategic negotiations and key partnerships

## Excessive Bullets

Bullets are for genuinely list-shaped content: steps, options, parameters, comparisons. Convert decorative bullet stacks into prose.

Before:

> - Robust model access  
> - Seamless data integration  
> - Scalable validation workflows  
> - Actionable insights

After:

> The workflow gives model providers access to shared benchmark data, but validation still depends on the manufacturer's internal test loop.

## Bare Noun-Phrase Bullet Lists

Flag five or more consecutive bullets that are short adjective-plus-noun phrases with no finite verb.

Fix by converting items to claims or prose.

Before:

> - Stable mining efficiency  
> - Reliable pool connectivity  
> - Optimized performance  
> - Low failed-share rates  
> - Effective hardware use

After:

> Failed shares stayed below 1% during the 12-hour run, and pool connectivity did not drop during peak load.

## List-Label Periods

AI often writes bold labels with periods where humans use colons.

Before:

> - **Evidence.** Public papers and documented deployments.

After:

> - **Evidence:** public papers and documented deployments.

If the label is a complete sentence, keep the period.

## Hyphenated-Pair Overuse

Cut stacked compound modifiers. Also fix predicate hyphenation.

Before:

> The report is well-structured and future-proof.

After:

> The report is well structured.

Before:

> A high-quality, future-proof, end-to-end solution.

After:

> An end-to-end workflow.

## Curly Quotes In Plain Text

Curly quotes are a weak signal, not proof. In code comments, commit messages, plaintext drafts, or copied chat output, prefer straight quotes. In finished publications, leave locale-correct typography alone.

## Excessive Structure

Too many headers in short text makes the piece look generated.

Signals:

- more than three headings under 300 words
- eight or more bullets under 200 words
- generic section headers: Overview, Key Points, Summary, Conclusion, Introduction

Fix by merging sections or writing specific headings.
