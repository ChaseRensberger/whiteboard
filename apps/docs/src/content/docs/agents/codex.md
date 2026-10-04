---
title: Codex
description: Install the Whiteboard plugin in Codex and test the connection.
---

Codex can create reviews and answer questions through Ask Agent. Before setup,
install the [Whiteboard command](/start/installation/#enable-the-command) and
sign in to Codex. Keep Whiteboard open during setup.

## Install the plugin

Select Codex under Connect your agents in Whiteboard, or print the setup
instructions with:

```sh
whiteboard connect codex
```

For manual setup, add the marketplace and plugin:

```sh
codex plugin marketplace add devdotfast/whiteboard
codex plugin add whiteboard@devfast
```

The plugin configures the MCP connection. It includes a shell launcher for macOS
and Linux and a command launcher for Windows.

## Replace an older manual connection

If you previously added Whiteboard directly to Codex's MCP configuration, remove
that registration after installing the plugin:

```sh
codex mcp remove whiteboard
```

If you used an older Whiteboard skill, follow the migration steps from
`whiteboard connect codex`. Keep other plugins and MCP servers in place.

## Test the connection

Reload Codex's MCP tools or restart Codex. Ask it to call
`session_get_instructions` on the Whiteboard server. The result contains the
instructions for writing a review.

Continue with [Your first review](/start/first-review/). For questions inside
Whiteboard, [Ask Agent](/guides/ask-agent/) uses your installed `codex` command
and login. Whiteboard includes the adapter that connects Ask to Codex.
