import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/skills/scikit.html.vue"
const data = JSON.parse("{\"path\":\"/skills/scikit.html\",\"title\":\"Scikit-learn\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Scikit-learn\",\"description\":\"Machine learning library for Python, offering efficient tools for predictive modeling and analysis.\",\"cover\":\"/images/skills/scikit.png\",\"layout\":\"Skill\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"skills/scikit.md\",\"excerpt\":\"<p>Scikit-learn is a popular library for <strong>machine learning</strong> built on top of NumPy and SciPy.<br>\\nIt provides simple and efficient tools for <strong>data mining</strong>, <strong>model training</strong>, and <strong>evaluation</strong>.</p>\\n\"}")
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
