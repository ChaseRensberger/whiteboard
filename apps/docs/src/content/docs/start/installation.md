---
title: Install Whiteboard
description:
  Install the stable Whiteboard app on macOS, Windows, or Linux, then enable the
  whiteboard command.
---

Whiteboard includes the desktop app and the `whiteboard` command for agent
connections. Install the app for your operating system, then enable the command.
To create reviews, you also need an installed coding agent with an active login.

## macOS

Choose the download for your Mac from the
[official installation page](https://dev.fast/install/). Apple Silicon and Intel
builds are available. In the Apple menu, use About This Mac to identify your
processor.

1. Open the downloaded `.dmg` file.
2. Move Whiteboard to Applications.
3. Open Whiteboard.

## Windows

Download the Windows x64 installer from the
[official installation page](https://dev.fast/install/). The
[release assets](https://github.com/devdotfast/whiteboard/releases/tag/v0.2.0)
also include a system installer and a portable ZIP. For a single-user
installation, use the installer from the installation page.

1. Run the installer.
2. Follow its installation steps.
3. Open Whiteboard from the Start menu.

## Linux

Whiteboard supplies signed package repositories for Fedora, Ubuntu, and Arch
Linux. The stable desktop packages target x86-64. Use the commands on the
[official installation page](https://dev.fast/install/) for your distribution.

1. Add the package repository with the published command.
2. Install the `whiteboard` package through your package manager.
3. Open Whiteboard from your application launcher.

The installation page provides the current repository URLs and signing
instructions.

## Enable the command

PATH lists the folders your shell searches for commands. On the welcome screen,
select Install whiteboard in PATH if available. You can also install the command
under Settings → Command line.

After installation, open a new terminal. Run:

```sh
whiteboard --version
```

The command prints the installed version. If your terminal cannot find it, see
[Command not found](/help/troubleshooting/#command-not-found).

On macOS and Linux, the installed launcher is normally at
`~/.local/bin/whiteboard`. Windows uses a command launcher supplied by the app
or installer. Use the app's setup instructions for your platform.

## Update Whiteboard

On macOS and Windows, use the app's update notification or download the current
installer. On Linux, update through the package manager after adding the
official repository. Restart the app after an update completes.

If Whiteboard requests an agent-connection update, follow its welcome-screen
instructions. These guides cover the stable release.
[Preview builds](https://dev.fast/install/preview) install alongside stable
Whiteboard.

## Next step

[Connect your agent](/agents/) to create reviews. Then follow
[Your first review](/start/first-review/) to review a branch. To open an example
review, select Take the tour on the welcome screen.
