---
title: oh-my-pi
description: Connect oh-my-pi to Whiteboard through MCP to create reviews.
---

oh-my-pi uses the `omp` command and can create reviews through MCP. Ask Agent
does not support oh-my-pi in Whiteboard v0.2.0. Before setup, install the
[Whiteboard command](/agents/#enable-the-command). Keep Whiteboard open during
setup.

## Get the setup instructions

Select oh-my-pi on Whiteboard's welcome screen, or print the setup instructions:

```sh
whiteboard connect omp
```

Follow the printed instructions in your agent. For manual setup, merge the entry
below into the `mcpServers` object in `~/.omp/agent/mcp.json`. Preserve the
other entries in that file.

## macOS and Linux

Use the installed shell launcher:

```json title="~/.omp/agent/mcp.json"
{
  "mcpServers": {
    "whiteboard": {
      "command": "sh",
      "args": ["-c", "exec \"$HOME/.local/bin/whiteboard\" mcp"]
    }
  }
}
```

## Windows

Use the Windows command launcher. The path below is relative to your user home
directory:

```json title="~/.omp/agent/mcp.json"
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

If the older Whiteboard plugin is installed, remove it:

```sh
omp plugin uninstall @dev.fast/pi-whiteboard
```

Run `/mcp reload` inside oh-my-pi. Ask the agent to call
`session_get_instructions` on the Whiteboard server. When that succeeds, follow
[Create a review](/guides/create-a-review/).
