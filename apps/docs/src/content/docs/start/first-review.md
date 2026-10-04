---
title: Your first review
description:
  Ask your connected coding agent to explain a branch, then inspect the
  resulting review in Whiteboard.
---

Your agent compares your branch with a base revision and creates a review in
Whiteboard. The base revision is the starting point for the comparison. The
review explains the changes and links to the affected code.

## Before you begin

Make sure that you have:

- An [installed Whiteboard app](/start/installation/) that is open.
- A [connected coding agent](/agents/) with access to your local repository.
- A branch with changes compared with its base branch.

If you do not have a branch ready, select Take the tour on Whiteboard's welcome
screen to open an example review.

## Ask for an explanation

Open your agent in the repository. If your repository uses a different base
branch, replace `main` in this prompt:

```text
Review my current branch against up-to-date main and open the result in Whiteboard.
Start with the purpose of the change, then explain the main behavior changes.
Link the explanation to the relevant code and call out open questions.
```

The agent creates the comparison and opens the review. It can request permission
to fetch the base branch or read the repository. Review these requests in your
agent.

If the agent cannot find Whiteboard's tools, return to your
[agent setup page](/agents/). Ask it to call `session_get_instructions` on the
Whiteboard server before trying again.

## Review the comparison

When the review opens, make sure that it uses the intended repository and
revisions. Pinned revisions are fixed versions of the code. Later commits do not
appear until the agent updates the comparison.

Open a code reference from the explanation. Make sure that it points to the
change you asked about. If either revision is wrong, ask the agent to correct
the comparison.

## Inspect a behavior

Choose a behavior to inspect, such as an API response or error path:

1. Read the explanation of the behavior.
2. Open its linked diagram elements.
3. Inspect the changed files.

If the review omits a path, ask the agent to add it. For example:

```text
Explain what happens when this request fails. Show the error path in a diagram
and link each step to the code that handles it.
```

See [Read a review](/guides/read-a-review/) for the available views. To request
further changes, [send feedback to your agent](/guides/give-feedback/). You can
also use [Ask Agent](/guides/ask-agent/) for questions inside Whiteboard.
