---
title: Share a review
description:
  Create a share link, publish an updated review, or revoke future downloads.
---

A share link points to a snapshot, a fixed copy of a saved review. The snapshot
includes the explanation and its images and other assets. Later edits do not
change the shared copy.

## Create a share link

Open the review you want to share. Read its contents before publishing it. If
you are signed in, selecting Share review starts the upload immediately.

To publish the review:

1. Select Share review in the review toolbar.
2. If prompted, select Sign in to share.
3. If requested, complete GitHub sign-in.
4. Wait for the upload to finish.
5. Select Copy link.

Send the link to your readers. Recipients open it with Whiteboard.

## What the link contains

Anyone with the link can download the shared copy. It contains the review text,
images, software maps, pinned commit information, and your GitHub login. For a
repository-backed review, it also includes the GitHub clone URL.

The share does not upload the repository's source files. Readers fetch pinned
commits from GitHub with their own access. Review prose and images can still
contain code or other project details, so read the content you are sharing.

Whiteboard v0.2.0 also supports shares without an attached Git repository. For
the full list of shared data, see [Privacy and data](/help/privacy/#sharing).

## Share a revision

After the agent updates your review, select Share review again. Send the new
link to readers who need the updated version. The old link remains available
until you revoke it.

## Revoke future downloads

To stop future downloads, replace `<share-id>` with the identifier from the
share link and run:

```sh
whiteboard share revoke <share-id>
```

Revocation stops future downloads from that link. It does not delete copies that
readers already downloaded. If sharing fails, see
[Sharing does not finish](/help/troubleshooting/#sharing-does-not-finish).
