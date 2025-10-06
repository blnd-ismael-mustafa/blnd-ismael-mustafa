import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/certifications/ML.html.vue"
const data = JSON.parse("{\"path\":\"/certifications/ML.html\",\"title\":\"AI & Machine Learning Bootcamp\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"AI & Machine Learning Bootcamp\",\"description\":\"Comprehensive course on data science, machine learning, and AI using Python.\",\"cover\":\"/images/certifications/ML.jpg\",\"layout\":\"Certification\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"certifications/ML.md\",\"excerpt\":\"<p>The <strong>AI &amp; Machine Learning Bootcamp</strong> covers <strong>supervised and unsupervised learning</strong>, <strong>neural networks</strong>, and <strong>data preprocessing</strong>.<br>\\nYou’ll learn how to build predictive models using <strong>NumPy</strong>, <strong>Pandas</strong>, and <strong>Scikit-learn</strong>.</p>\"}")
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
