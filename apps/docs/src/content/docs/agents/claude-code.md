---
title: Claude Code
description:
  Connect Claude Code to Whiteboard through the marketplace plugin or a Windows
  MCP registration.
---

Claude Code can create reviews and answer questions through Ask Agent. Before
setup, install the [Whiteboard command](/agents/#enable-the-command) and sign in
to Claude Code. Keep Whiteboard open during setup.

## Connect from Whiteboard

On Whiteboard's welcome screen, select Claude Code under Connect your agents.
Copy the setup prompt into Claude Code. To print the instructions in a terminal,
run:

```sh
whiteboard connect claude
```

The instructions include migration steps for older installations. For manual
setup, follow the steps for your operating system below.

## macOS and Linux

Add Whiteboard's marketplace and install the plugin:

```sh
claude plugin marketplace add devdotfast/whiteboard
claude plugin install whiteboard@devfast --scope user
```

If you previously registered a manual `whiteboard` MCP server, remove that old
registration after installing the plugin:

```sh
claude mcp remove -s user whiteboard
```

The plugin connects through MCP and starts `~/.local/bin/whiteboard`.

## Windows

The Claude plugin's shell launcher does not run on Windows in v0.2.0. Register
the MCP server directly:

```sh
claude mcp add -s user whiteboard -- cmd /d /c whiteboard mcp
```

If the plugin or an older registration is already installed, use
`whiteboard connect claude` for the removal steps before adding the server. If
Windows cannot find `whiteboard`, open a new terminal.

## Test the connection

Reload Claude's MCP tools or restart Claude Code. Ask it to call
`session_get_instructions` on the Whiteboard server. Once the call succeeds,
follow [Create a review](/guides/create-a-review/).

For questions inside Whiteboard,
[Ask Agent](/guides/give-feedback/#ask-inside-whiteboard) uses your installed
`claude` command and login. Whiteboard includes the adapter that connects Ask to
Claude Code.
