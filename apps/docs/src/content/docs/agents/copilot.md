---
title: GitHub Copilot CLI
description:
  Connect GitHub Copilot CLI to Whiteboard through its plugin marketplace or
  Windows MCP registration.
---

GitHub Copilot CLI can create Whiteboard reviews. These instructions apply to
the `copilot` command. Ask Agent does not support Copilot CLI in Whiteboard
v0.2.0.

## Before you begin

Install Copilot CLI. Complete its sign-in process. Install the
[Whiteboard command](/start/installation/#enable-the-command). Keep Whiteboard
open during setup. Print the setup instructions with:

```sh
whiteboard connect copilot
```

You can also copy the setup prompt from Whiteboard's welcome screen into Copilot
CLI. For manual setup, follow the steps for your operating system below.

## macOS and Linux

Add Whiteboard's marketplace and install the plugin:

```sh
copilot plugin marketplace add devdotfast/whiteboard
copilot plugin install whiteboard@devfast
```

If you already have a manual `whiteboard` MCP registration, remove it after the
plugin installation:

```sh
copilot mcp remove whiteboard
```

The plugin configures the MCP connection and starts `~/.local/bin/whiteboard`.

## Windows

The plugin's shell launcher does not run on Windows in v0.2.0. Register the MCP
server directly:

```sh
copilot mcp add whiteboard -- cmd /d /c whiteboard mcp
```

If the plugin or an older registration already exists, use
`whiteboard connect copilot` for the replacement steps. If the terminal cannot
find `whiteboard` after installation, open a new terminal.

## Test the connection

Reload Copilot's MCP tools or restart Copilot CLI. Ask it to call
`session_get_instructions` on the Whiteboard server. After the call succeeds,
follow [Your first review](/start/first-review/).
