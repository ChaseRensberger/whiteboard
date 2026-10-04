---
title: Connect your agent
description:
  Connect a coding agent to Whiteboard, choose its setup instructions, and test
  the connection.
---

Whiteboard uses your installed coding agent and its model access. Install the
agent and sign in before setup. Whiteboard does not include a model
subscription.

## Review creation and Ask Agent

Your agent can create and update reviews from its own interface. It connects
through MCP, a protocol that connects agents to tools. Some agents use a plugin
to install that connection.

Ask Agent answers questions inside Whiteboard. It uses ACP, a protocol for
communication between an agent and an app. Ask is a preview feature in
Whiteboard v0.2.0 and requires a supported local agent command.

## Compatibility

Select your agent in the table to open its setup instructions. The table lists
integrations included in Whiteboard v0.2.0. Support varies by agent version and
operating system. See
[Ask Agent requirements](/guides/ask-agent/#before-you-begin).

| Agent                                  | Create reviews from your agent                 | Ask inside Whiteboard          |
| -------------------------------------- | ---------------------------------------------- | ------------------------------ |
| [Claude Code](/agents/claude-code/)    | Plugin, or direct MCP on Windows               | Yes, preview                   |
| [Codex](/agents/codex/)                | Plugin                                         | Yes, preview                   |
| [Cursor](/agents/cursor/)              | MCP                                            | Yes, with Cursor CLI, preview  |
| [OpenCode v2](/agents/opencode/)       | MCP                                            | Yes, preview                   |
| [Pi](/agents/pi/)                      | Native MCP in Pi 0.99+, extension for older Pi | Yes, with limitations, preview |
| [oh-my-pi](/agents/oh-my-pi/)          | MCP                                            | Not supported                  |
| [GitHub Copilot CLI](/agents/copilot/) | Plugin, or direct MCP on Windows               | Not supported                  |

## Start from the app

On Whiteboard's welcome screen:

1. Select your agent under Connect your agents.
2. Copy the setup prompt.
3. Paste the prompt into your agent.

The prompt contains instructions for your installed app and platform.

You can also print the setup instructions from a terminal. For example:

```sh
whiteboard connect opencode
```

The command prints instructions but does not apply them. Follow the instructions
or give them to your agent. Each agent's guide also includes manual setup and
restart steps.

## Test the connection

For an MCP connection, ask your agent:

```text
Call session_get_instructions on the Whiteboard server to confirm the connection.
Do not create a review yet.
```

For Pi before 0.99.0, ask the agent to run this command instead:

```sh
whiteboard api session_get_instructions '{}'
```

Older Pi uses the Whiteboard skill and CLI rather than MCP tools.

A successful call returns Whiteboard's instructions for creating reviews.
Continue with [Your first review](/start/first-review/). If the tool is
unavailable, follow your agent's reload or restart instructions. For connection
errors, see [Troubleshooting](/help/troubleshooting/).
