---
title: Pi
description:
  Connect Pi 0.99 or later through native MCP, or use the extension for older Pi
  releases.
---

Pi can create reviews and answer questions through Ask Agent. Before setup,
install the [Whiteboard command](/agents/#enable-the-command). Keep Whiteboard
open during setup. Follow the instructions for your Pi version below.

## Pi 0.99.0 and later

Use Pi's native MCP support. On macOS and Linux, run:

```sh
pi mcp add whiteboard -- sh -c 'exec "$HOME/.local/bin/whiteboard" mcp'
```

On Windows, use:

```sh
pi mcp add whiteboard -- cmd /d /c whiteboard mcp
```

If the older extension is installed, remove it after adding the native
connection:

```sh
pi remove npm:@dev.fast/pi-whiteboard
```

## Older Pi releases

Install the Whiteboard extension instead of using native MCP:

```sh
pi install npm:@dev.fast/pi-whiteboard
```

The extension uses Whiteboard's command interface. To print setup instructions
for your installed Pi version, run:

```sh
whiteboard connect pi
```

## Test the connection

Run `/reload` inside Pi. On Pi 0.99+, ask the agent to call
`session_get_instructions` on the Whiteboard server. On older Pi, ask it to run:

```sh
whiteboard api session_get_instructions '{}'
```

After the call succeeds, follow [Create a review](/guides/create-a-review/). If
an older installation needs migration, follow the steps from
`whiteboard connect pi`.

## Pi in Ask Agent

Whiteboard includes the `pi-acp` adapter to connect Ask to your installed Pi. It
uses your Pi login. Pi 0.99+ on non-Windows systems can receive Whiteboard's MCP
tools in Ask. Older Pi and Windows answer without those supplied MCP servers.

Pi has no read-only mode in this integration. It can edit files and run commands
without asking for permission. Read the
[Ask permissions table](/guides/give-feedback/#agent-permissions) for details.
