---
title: Connect your agent
description: Choose an agent, connect it to Whiteboard, and test the connection.
---

Install your coding agent and sign in before setup. Whiteboard uses your agent's
model access. It does not include a model subscription.

## Enable the command

Keep Whiteboard open. On the welcome screen, select Install whiteboard in PATH
if available. You can also install it under Settings → Command line.

Open a new terminal and run:

```sh
whiteboard --version
```

If the command does not start, see
[Command not found](/help/troubleshooting/#command-not-found).

## Connect from Whiteboard

On the welcome screen:

1. Select your agent under Connect your agents.
2. Copy the setup prompt.
3. Paste it into your agent and follow its instructions.

Review creation uses MCP, a protocol that connects agents to tools. Some plugins
install this connection. Older Pi uses a skill and the command line instead.

Select your agent for manual setup and restart steps:

| Agent                                  | Create reviews from your agent                 | Ask inside Whiteboard     |
| -------------------------------------- | ---------------------------------------------- | ------------------------- |
| [Claude Code](/agents/claude-code/)    | Plugin, or direct MCP on Windows               | Preview                   |
| [Codex](/agents/codex/)                | Plugin                                         | Preview                   |
| [Cursor](/agents/cursor/)              | MCP                                            | Preview, with Cursor CLI  |
| [OpenCode v2](/agents/opencode/)       | MCP                                            | Preview                   |
| [Pi](/agents/pi/)                      | Native MCP in Pi 0.99+, extension for older Pi | Preview, with limitations |
| [oh-my-pi](/agents/oh-my-pi/)          | MCP                                            | Not supported             |
| [GitHub Copilot CLI](/agents/copilot/) | Plugin, or direct MCP on Windows               | Not supported             |

This table covers Whiteboard v0.2.0. Support varies by agent version and
operating system. Desktop installer availability does not mean that each agent
supports that system.

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

A successful call returns Whiteboard's authoring instructions. Next,
[create a review](/guides/create-a-review/).

## Ask inside Whiteboard

Ask Agent answers questions about selected review text. It is a preview feature
in v0.2.0. Ask uses ACP, a protocol for agent-to-app communication.

Ask starts a separate conversation. It does not reuse the conversation that
created the review. Install the agent's command-line interface (CLI) and sign in
before using Ask. Cursor needs `cursor-agent`, even if you use the Cursor
editor.

Ask supports Claude Code, Codex, Cursor, OpenCode v2, and Pi. Not all
integrations are verified on native Windows. Choose an agent that Whiteboard
detects in your installation.

Permissions differ by agent. Pi does not ask before edits or commands. Read the
[Ask instructions and permission table](/guides/give-feedback/#ask-inside-whiteboard)
before starting a conversation.
