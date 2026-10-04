---
title: Read a review
description:
  Read an agent's explanation, open linked code, and inspect changes in the Diff
  view and Decision Log.
---

A review contains an agent's explanation of code changes, with diagrams and
source links. The agent chooses which sections and diagrams to include. Start
with the explanation, then use the links to inspect the code.

## Read the explanation

Read the purpose and scope of the change. For an API change, look for the
proposed interface and usage examples. For a behavior change, compare the
behavior before and after the change.

If those details are missing,
[ask your agent to add them](/guides/give-feedback/).

## Follow diagrams to code

Whiteboard supports flow, sequence, and data-model diagrams. A flow diagram
shows steps and branches. A sequence diagram shows interactions over time. A
data-model diagram shows records and their relationships.

Select a linked diagram element or code reference to open its source. For
supported languages, the code view provides navigation to definitions and
references. If an element has no source link, ask the agent to add one.

## Inspect the diff

A diff shows the changes between two code versions. Whiteboard groups changes by
code structure, such as functions and declarations. It can collapse content and
summarize large additions.

Open the Diff view to inspect the changed files and lines. Expand collapsed
sections to read the code behind a summary. For a bug fix, inspect the changed
behavior and its tests.

## Understand agent decisions

The Decision Log links excerpts from agent conversations to the code they
explain. It requires access to the relevant agent history. Use the excerpts to
read the discussion behind an implementation choice.

For details about hosted conversation storage, see
[Privacy and data](/help/privacy/#hosted-trace-store).

## Update the comparison

The comparison uses pinned revisions, which are fixed versions of the code.
Later commits do not appear automatically. If your branch changes, ask the agent
to update the comparison and explanation.

To request a revision, follow [Give feedback](/guides/give-feedback/).
