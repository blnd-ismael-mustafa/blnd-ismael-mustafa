import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/skills/figma.html.vue"
const data = JSON.parse("{\"path\":\"/skills/figma.html\",\"title\":\"Figma\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Figma\",\"description\":\"Powerful UI design tool for collaborative prototyping.\",\"cover\":\"/images/skills/figma.png\",\"layout\":\"Skill\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"skills/figma.md\",\"excerpt\":\"<p>Figma allows me to design, collaborate, and prototype beautiful UI/UX experiences.</p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
