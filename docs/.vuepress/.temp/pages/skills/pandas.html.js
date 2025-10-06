import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/skills/pandas.html.vue"
const data = JSON.parse("{\"path\":\"/skills/pandas.html\",\"title\":\"Pandas\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Pandas\",\"description\":\"Data analysis and manipulation tool built on top of Python.\",\"cover\":\"/images/skills/panda.png\",\"layout\":\"Skill\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"skills/pandas.md\",\"excerpt\":\"<p>Pandas is an open-source library for <strong>data manipulation and analysis</strong>.<br>\\nIt offers powerful tools like <strong>DataFrames</strong> and <strong>Series</strong> for handling structured data efficiently.</p>\\n\"}")
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
