---
title: Give feedback
description:
  Send a Whiteboard selection back to your coding agent and request a clearer
  explanation or an updated review.
---

Copy a review selection to your coding agent to request changes to the
explanation or code. The copied context identifies the selected part of the
review.

## Copy a selection to your agent

In the open review:

1. Select the text or supported review element you want to discuss.
2. Select the copy action in the selection toolbar.
3. Paste the result into your coding agent's conversation.
4. Add your request after the copied context.

For example:

```text
This section explains the successful request, but not a timeout.
Add the timeout path and link it to the code that retries the request.
```

On macOS, <kbd>Shift</kbd> + <kbd>⌘</kbd> + <kbd>C</kbd> copies the selection
with its review context. If the shortcut is unavailable, use the toolbar action.

## Request a revision

Name the information or change you need. Example requests:

- Show the public API before describing the internal implementation.
- Add the failure path to this sequence diagram.
- Explain why this change needs a new table instead of an existing one.
- Link this claim to the test that covers it.

To change source code, give the request to your coding agent. After the code
changes, ask the agent to update the review's comparison and explanation.

## Read the updated review

After the agent updates the review, read the affected section. Open its source
links to inspect the code. If the explanation is still incomplete, ask the agent
to add the missing details.

If you already [shared the review](/guides/share-a-review/), create a new share
link for the updated version. Existing links retain the earlier version.
