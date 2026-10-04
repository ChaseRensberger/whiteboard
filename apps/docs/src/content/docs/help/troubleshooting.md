---
title: Troubleshooting
description:
  Resolve command installation, missing agent tools, Ask startup, review source,
  and sharing problems.
---

Find the section that matches the problem. For installation instructions, see
[Install Whiteboard](/start/installation/). For agent configuration, see
[Connect your agent](/agents/).

## Command not found

If your terminal cannot find `whiteboard`, open the app's Settings → Command
line. Install the launcher. Then open a new terminal.

PATH lists the folders your shell searches for commands. On macOS and Linux, the
launcher is normally at `~/.local/bin/whiteboard`. Make sure that `~/.local/bin`
is on PATH. Run `whiteboard --version` to make sure that the command starts.

If multiple copies exist, configure your agent to use the desktop app's
launcher. Use the current [installation instructions](/start/installation/) to
replace an older `review` installation.

## My agent cannot find Whiteboard tools

Open Whiteboard. Print the setup instructions for your agent. For example, for
OpenCode:

```sh
whiteboard connect opencode
```

Follow the printed steps. The command prints instructions but does not apply
them. For other agents, use the command on the [agent's setup page](/agents/).

Reload the agent's tools after configuration. For OpenCode, quit and reopen the
app. Pi uses `/reload`, and oh-my-pi uses `/mcp reload`. Ask the agent to call
`session_get_instructions` before creating a review.

## The wrong Whiteboard instance opens

An instance is a running copy of Whiteboard. Stable, preview, and development
instances can run at the same time. To see which instance is selected, run:

```sh
whiteboard instances
```

To select another running instance, replace `<key>` with its key from the output
and run:

```sh
whiteboard instances use <key>
```

Reconnect your agent's MCP server after switching. If the instance is absent
from the list, open that copy of Whiteboard first.

## Ask cannot find my agent

Ask requires the agent's command-line interface (CLI), even if you use an editor
integration. Install the CLI. Complete its sign-in process. For Cursor, the
required command is `cursor-agent`.

Make sure that the command runs in a new terminal. Restart Whiteboard to detect
the installation. If Ask cannot authenticate, complete the agent's sign-in
process again.

If Ask does not support your agent, use
[Copy for Agent](/guides/give-feedback/#copy-a-selection-to-your-agent) to
continue in its own interface. See [Ask Agent](/guides/ask-agent/) for supported
agents and platform limitations.

## Code links or comparisons are wrong

Make sure that the review points to the repository and revisions you intended.
If either revision is wrong, ask the agent to correct the comparison. A review
does not automatically include later commits.

For a shared review, make sure that your GitHub account can access the
repository and its pinned commits. A share link does not grant repository
access. If a diagram has no code reference, ask the authoring agent to add one.

## Sharing does not finish

If the Share review panel requests GitHub sign-in, complete it. Return to
Whiteboard after the browser flow finishes. If the panel reports an upload
error, use Retry.

If the review changes after sharing, create a new link. Existing links do not
update. See [Share a review](/guides/share-a-review/) for the snapshot behavior
and revocation command.

## Report a problem

Use the app's Report a bug action or open a
[GitHub issue](https://github.com/devdotfast/whiteboard/issues). Include the app
version, agent version, operating system, steps to reproduce, and the exact
error message.

The in-app bug report can include a review, changed-file diffs, and a
screenshot. Review the selected attachments before sending the report. Read
[Privacy and data](/help/privacy/#user-initiated-bug-reports) for the contents
and retention rules, or ask the community on
[Discord](https://discord.gg/wYvd2cpMQg).
