import { CodeTabs } from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_d372d43aff1ce19145ad65f550505878/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_d372d43aff1ce19145ad65f550505878/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_d372d43aff1ce19145ad65f550505878/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
