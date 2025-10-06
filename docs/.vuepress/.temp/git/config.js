import { GitContributors } from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_bbf0229843838c9df9eaa0dbd61447f1/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_bbf0229843838c9df9eaa0dbd61447f1/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
