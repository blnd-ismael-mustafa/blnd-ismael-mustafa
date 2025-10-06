import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/certification/index.html.vue"
const data = JSON.parse("{\"path\":\"/certification/\",\"title\":\"Certifications\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Certifications\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"certification\"},\"layout\":\"Certification\"},\"headers\":[],\"git\":{},\"filePathRelative\":null}")
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
