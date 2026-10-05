---
title: Cursor
description:
  Connect Cursor to Whiteboard through MCP. Use Cursor CLI for questions in Ask
  Agent.
---

Cursor can create reviews through MCP. Before setup, install the
[Whiteboard command](/agents/#enable-the-command). Keep Whiteboard open during
setup. Ask Agent requires the separate `cursor-agent` command.

## Use the connection prompt

Select Cursor under Connect your agents in Whiteboard. Copy the setup prompt
into Cursor. To print the instructions in a terminal, run:

```sh
whiteboard connect cursor
```

The setup prompt opens an MCP installation link in Cursor. Accept the
installation in Cursor. If the link does not work, use the manual configuration
below.

## Manual configuration

Merge the appropriate `whiteboard` entry into the `mcpServers` object in
`~/.cursor/mcp.json`. Preserve other servers and configuration in that file. On
Windows, `~` refers to your user home directory.

For macOS and Linux:

```json title="~/.cursor/mcp.json"
{
  "mcpServers": {
    "whiteboard": {
      "command": "sh",
      "args": ["-c", "exec \"$HOME/.local/bin/whiteboard\" mcp"]
    }
  }
}
```

For Windows:

```json title="~/.cursor/mcp.json"
{
  "mcpServers": {
    "whiteboard": {
      "command": "cmd",
      "args": ["/d", "/c", "whiteboard", "mcp"]
    }
  }
}
```

## Test the connection

Reload Cursor's MCP tools or restart Cursor. Ask its agent to call
`session_get_instructions` on the Whiteboard server. If the call succeeds,
continue with [Create a review](/guides/create-a-review/).

To use [Ask Agent](/guides/give-feedback/#ask-inside-whiteboard), install Cursor
CLI separately. Complete its sign-in process. Whiteboard launches `cursor-agent`
with `acp`.
