---
title: OpenCode
description: Connect OpenCode v2 to Whiteboard through MCP.
---

OpenCode v2 can create reviews and answer questions through Ask Agent in
Whiteboard v0.2.0. The connection uses MCP and requires no Whiteboard-specific
OpenCode plugin.

## Before you begin

Install OpenCode v2 and configure a model provider. Install the
[Whiteboard command](/start/installation/#enable-the-command). Keep Whiteboard
open during setup. Print the setup instructions with:

```sh
whiteboard connect opencode
```

For manual setup, use the command for your operating system below. The
`--global` flag makes the server available across your projects. For a
connection limited to the current project, omit `--global`.

## macOS and Linux

Run this command in a terminal:

```sh
opencode mcp add --global whiteboard -- sh -c 'exec "$HOME/.local/bin/whiteboard" mcp'
```

The shell expands `$HOME` when OpenCode starts the MCP server. This command uses
the launcher at `~/.local/bin/whiteboard`.

## Windows

Use the Windows command launcher:

```sh
opencode mcp add --global whiteboard -- cmd /d /c whiteboard mcp
```

If the terminal cannot find `whiteboard`, install the command from Whiteboard.
Then open a new terminal.

## Test the connection

After setup, quit and reopen OpenCode. List the configured servers:

```sh
opencode mcp list
```

Make sure that `whiteboard` is connected. Ask your agent to call
`session_get_instructions` on that server. After the call succeeds, follow
[Your first review](/start/first-review/).

## Existing installations

If you use the older `@dev.fast/opencode-whiteboard` plugin, follow
`whiteboard connect opencode` to replace it with MCP. Keep other plugins and
configuration intact. If you use a community integration, configure only one
connection to the same Whiteboard instance.

The commands above target OpenCode v2. Its manual configuration places local
servers under `mcp.servers`. See the
[OpenCode v2 MCP guide](https://opencode.ai/v2/docs/mcp-servers) for the current
configuration format. For older OpenCode releases, use the version-specific
instructions printed by Whiteboard.

For questions inside Whiteboard, [Ask Agent](/guides/ask-agent/) launches your
installed `opencode acp`.
