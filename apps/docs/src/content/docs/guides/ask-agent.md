---
title: Ask Agent
description:
  Ask questions about selected review text. Learn which agents are supported and
  which permissions each agent uses.
---

Ask Agent opens a conversation about selected review text in a side panel. Your
local coding agent answers the question. Ask Agent is a preview feature in
Whiteboard v0.2.0.

## Before you begin

Install a supported agent's command-line interface (CLI). Sign in to the agent
before you use Ask. Whiteboard uses that installation and its model access.

Whiteboard includes Ask integrations for Claude Code, Codex, Cursor, OpenCode,
and Pi. Cursor requires `cursor-agent`, even if you already use the Cursor
editor. oh-my-pi and GitHub Copilot CLI can create reviews, but Ask does not
support them.

Agent support varies by operating system. Not all Ask integrations are verified
on native Windows. Choose an agent that Whiteboard detects in your installation.

## Ask about a passage

1. Open a review.
2. Select a passage of text.
3. Choose an available agent from the selection toolbar.
4. Enter your question in the Ask panel.

On macOS, <kbd>⌘</kbd> + <kbd>L</kbd> opens Ask for a selection when an agent is
available. On other platforms, use the selection toolbar. For example, ask:

```text
Which caller depends on this behavior, and what changes if this request fails?
```

The agent receives the selected text and its review context. It can read source
code and use the tools supplied by the integration. Ask starts a separate
session from the agent conversation that created the review.

## Agent permissions

Whiteboard v0.2.0 requests the following permissions when it starts each agent.
The restrictions differ by agent and version. Ask does not provide a shared
read-only mode for all agents.

| Agent       | Default launch behavior                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| Claude Code | Disables file-edit tools. Commands can request permission. Whiteboard tools can still update the review. |
| Codex       | Requests the `read-only` session mode.                                                                   |
| Cursor      | Requests `ask` mode.                                                                                     |
| OpenCode    | Supplies configuration that denies edits and asks before shell commands or web requests.                 |
| Pi          | Has no read-only mode and does not ask before edits or commands.                                         |

A permission bypass changes these restrictions for agents that support it. Read
each tool request before approving it. To continue in your existing agent
conversation, [copy the selection to your agent](/guides/give-feedback/).

## Follow a conversation

Whiteboard saves the conversation with the selected passage. You can return to
it to read earlier answers. If the passage changes, Whiteboard marks the
conversation Outdated.

An outdated answer refers to the earlier text. To get an answer about the
current version, select the updated passage and ask again.

## Preview limits

In v0.2.0, Ask does not support comments on diagrams or display code diffs in
the panel. Select text to use Ask. To inspect code changes, open the Diff view.

Pi 0.99+ on non-Windows systems can receive Whiteboard's MCP tools. Older Pi and
Windows answer without those supplied servers. If an agent is missing or cannot
start, follow
[Ask cannot find my agent](/help/troubleshooting/#ask-cannot-find-my-agent).
