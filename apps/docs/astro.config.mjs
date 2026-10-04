import { unified } from "@astrojs/markdown-remark";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import accessibleTables from "./src/plugins/accessible-tables";
import docsLinks from "./src/plugins/docs-links";

export default defineConfig({
  site: process.env.DOCS_SITE,
  base: process.env.DOCS_BASE || "/",
  trailingSlash: "always",
  // Astro's bundled prerenderer must not pick up an older hoisted cookie package.
  vite: {
    environments: { prerender: { resolve: { noExternal: ["cookie"] } } },
  },
  markdown: {
    processor: unified({
      remarkPlugins: [[docsLinks, { base: process.env.DOCS_BASE || "/" }]],
      rehypePlugins: [accessibleTables],
    }),
  },
  integrations: [
    starlight({
      title: "Whiteboard",
      description:
        "Install Whiteboard, connect your coding agent, and understand your first review.",
      logo: { src: "./src/assets/logo.svg", alt: "", replacesTitle: false },
      favicon: "/favicon.svg",
      customCss: ["./src/styles/custom.css"],
      editLink: {
        baseUrl:
          "https://github.com/devdotfast/whiteboard/edit/main/apps/docs/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/devdotfast/whiteboard",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/wYvd2cpMQg",
        },
      ],
      markdown: { processedDirs: ["../../docs"] },
      sidebar: [
        {
          label: "Start Here",
          items: [
            { slug: "index", label: "Overview" },
            "start/installation",
            "start/first-review",
          ],
        },
        {
          label: "Use Whiteboard",
          items: [
            { slug: "agents", label: "Connect your agent" },
            "guides/read-a-review",
            "guides/give-feedback",
            {
              slug: "guides/ask-agent",
              badge: { text: "Preview", variant: "note" },
            },
            "guides/share-a-review",
          ],
        },
        {
          label: "Help",
          items: [
            "help/troubleshooting",
            { label: "Privacy and data", link: "/help/privacy/" },
            { label: "Telemetry reference", link: "/help/telemetry/" },
          ],
        },
      ],
    }),
  ],
});
