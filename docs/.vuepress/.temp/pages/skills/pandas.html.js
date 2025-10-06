import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/skills/pandas.html.vue"
const data = JSON.parse("{\"path\":\"/skills/pandas.html\",\"title\":\"Pandas\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Pandas\",\"description\":\"Data analysis and manipulation tool built on top of Python.\",\"cover\":\"/images/skills/panda.png\",\"layout\":\"Skill\"},\"headers\":[],\"git\":{\"updatedTime\":1759715534000,\"contributors\":[{\"name\":\"Blndm01\",\"username\":\"Blndm01\",\"email\":\"blndbargrkaye@gmail.com\",\"commits\":2,\"url\":\"https://github.com/Blndm01\"}],\"changelog\":[{\"hash\":\"723620869bd0161f9f74c804ea45b26ff1e43e97\",\"time\":1759715534000,\"email\":\"blndbargrkaye@gmail.com\",\"author\":\"Blndm01\",\"message\":\"Deploy site\"},{\"hash\":\"c5e5bc29ac2c2b857dc4a8a0ade7e19b8cc95215\",\"time\":1759713750000,\"email\":\"blndbargrkaye@gmail.com\",\"author\":\"Blndm01\",\"message\":\"deploy\"}]},\"filePathRelative\":\"skills/pandas.md\",\"excerpt\":\"<p>Pandas is an open-source library for <strong>data manipulation and analysis</strong>.<br>\\nIt offers powerful tools like <strong>DataFrames</strong> and <strong>Series</strong> for handling structured data efficiently.</p>\\n\"}")
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
