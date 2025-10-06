import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/category/web-app/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/web-app/\",\"title\":\"Category Web App\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Category Web App\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Web App\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
