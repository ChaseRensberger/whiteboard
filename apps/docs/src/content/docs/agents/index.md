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

PATH lists the folders that your shell searches for commands. On macOS and
Linux, make sure that `~/.local/bin` is on PATH. The launcher is normally at
`~/.local/bin/whiteboard`. Windows uses a launcher supplied by the app or
installer. If multiple copies exist, use the current app's launcher, not an
older `review` command.

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

If Ask cannot authenticate, complete the agent's sign-in process again. If Ask
does not support your agent, use
[Copy for Agent](/guides/give-feedback/#copy-a-selection-to-your-agent).

## Install or update Whiteboard

Use the [official installation page](https://dev.fast/install/) for current
downloads and package commands.

- On macOS, choose Apple Silicon or Intel. Open the `.dmg` file and move
  Whiteboard to Applications.
- On Windows, use the x64 installer. The
  [v0.2.0 release assets](https://github.com/devdotfast/whiteboard/releases/tag/v0.2.0)
  also include a system installer and portable ZIP.
- On Linux, use the signed repositories for Fedora, Ubuntu, or Arch Linux.
  Stable desktop packages target x86-64.

On macOS and Windows, use the app's update notification or download the current
installer. On Linux, update through the package manager. Restart Whiteboard
after an update. If the app requests a connection update, follow its
welcome-screen instructions.

[Preview builds](https://dev.fast/install/preview) install alongside the stable
app.

### Choose a Whiteboard instance

An instance is a running copy of Whiteboard. Stable, preview, and development
instances can run at the same time. List them with:

```sh
whiteboard instances
```

Replace `<key>` with a key from the output:

```sh
whiteboard instances use <key>
```

Reconnect your agent's MCP server after switching. If the instance is absent,
open that copy of Whiteboard first.
