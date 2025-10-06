import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/skills/numpy.html.vue"
const data = JSON.parse("{\"path\":\"/skills/numpy.html\",\"title\":\"NumPy\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"NumPy\",\"description\":\"Python library for fast numerical computing and multi-dimensional arrays.\",\"cover\":\"/images/skills/numpy.png\",\"layout\":\"Skill\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"skills/numpy.md\",\"excerpt\":\"<p>NumPy is a fundamental package for <strong>scientific computing in Python</strong>.<br>\\nIt provides high-performance array operations, mathematical functions, and tools used in data analysis and machine learning.</p>\\n\"}")
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
