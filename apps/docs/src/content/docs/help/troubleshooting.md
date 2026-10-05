---
title: Troubleshooting
description: Resolve setup, code-link, Ask, sharing, and update problems.
---

Find the section that matches the problem. For setup steps, see
[Connect your agent](/agents/).

## Command not found

Install the launcher under Settings → Command line. Then open a new terminal and
run:

```sh
whiteboard --version
```

PATH lists the folders that your shell searches for commands. On macOS and
Linux, make sure that `~/.local/bin` is on PATH. The launcher is normally at
`~/.local/bin/whiteboard`.

Windows uses a launcher supplied by the app or installer. Follow the app's
platform-specific instructions. If multiple copies exist, configure your agent
to use the current app's launcher, not an older `review` command.

## My agent cannot find Whiteboard tools

Open Whiteboard. Print the setup instructions for your agent. For OpenCode, run:

```sh
whiteboard connect opencode
```

The command prints instructions but does not apply them. Follow the steps, then
reload your agent's tools. OpenCode needs a restart. Pi uses `/reload`. oh-my-pi
uses `/mcp reload`. For other agents, follow the
[agent's setup guide](/agents/#connect-from-whiteboard).

Repeat the [connection test](/agents/#test-the-connection) before creating a
review. If an old connection reports missing tools after an update, run the
current setup instructions again.

## The wrong Whiteboard instance opens

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

## Code links or comparisons are wrong

Make sure that the review points to the intended repository and revisions. If
either revision is wrong, ask the agent to correct the comparison. If a diagram
has no code reference, ask the agent to add one.

For a shared review, your GitHub account needs access to the repository and its
pinned commits. A share link does not grant repository access.

If the code changed after the agent wrote the review, ask it to update the
explanation and links. See
[Update the review](/guides/create-a-review/#update-the-review) for the
difference between commit and working-copy comparisons.

## Pseudocode summaries do not appear

Enable Structural Diffs and summaries in Settings → Experimental Features. Make
sure that the Gemini API key and model are configured. Use Test setup, then
select Save summaries and reload the window when prompted. Test setup sends
synthetic code to Gemini.

Summaries apply to large new functions and tests, not every change. See
[Enable pseudocode summaries](/guides/create-a-review/#enable-pseudocode-summaries)
for setup steps and the source-upload warning.

## The Decision Log has no agent history

The Decision Log needs the conversations behind the code. Trace capture is
experimental and requires storage configuration. Turning it on does not recreate
missing past conversations.

See
[Understand agent decisions](/guides/create-a-review/#understand-agent-decisions)
before enabling capture. Agent transcripts go to the selected store. If history
is unavailable, ask the agent to explain only what the code supports.

## Ask cannot find my agent

Make sure that the agent's command-line interface (CLI) runs in a new terminal.
For Cursor, the command is `cursor-agent`. Restart Whiteboard to detect the
installation. If Ask cannot authenticate, complete the agent's sign-in process
again.

If Ask does not support your agent, use
[Copy for Agent](/guides/give-feedback/#copy-a-selection-to-your-agent). See
[Ask requirements](/agents/#ask-inside-whiteboard) for supported agents and
platform limits.

## An Ask answer is Outdated

Whiteboard marks a conversation Outdated when its selected passage changes.
Select the updated passage and ask again. Ask starts a separate conversation
from the agent that created the review.

## Sharing does not finish

If the Share review panel requests GitHub sign-in, complete it and return to
Whiteboard. If the panel reports an upload error, use Retry. See
[Share a review](/guides/share-a-review/) for the upload steps.

If recipients cannot open linked code, make sure that their accounts can access
the repository and its pinned commits. The share link does not grant repository
access.

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
app. Use [the instance commands](#the-wrong-whiteboard-instance-opens) to choose
which app your agent uses.

## Report a problem

Use Report a bug in the app or open a
[GitHub issue](https://github.com/devdotfast/whiteboard/issues). Include the app
version, agent version, operating system, steps to reproduce, and exact error.

Read the selected attachments before sending an in-app report. Reports can
include a review, changed-file diffs, and a screenshot. See
[Privacy and data](/help/privacy/#user-initiated-bug-reports) for contents and
retention rules. For help, ask on [Discord](https://discord.gg/wYvd2cpMQg).
