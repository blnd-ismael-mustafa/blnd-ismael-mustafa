import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/skill/index.html.vue"
const data = JSON.parse("{\"path\":\"/skill/\",\"title\":\"Skills\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Skills\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"skill\"},\"layout\":\"Skill\"},\"headers\":[],\"git\":{},\"filePathRelative\":null}")
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
