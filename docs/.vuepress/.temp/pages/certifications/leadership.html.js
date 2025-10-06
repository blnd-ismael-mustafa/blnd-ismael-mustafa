import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/certifications/leadership.html.vue"
const data = JSON.parse("{\"path\":\"/certifications/leadership.html\",\"title\":\"Leadership & Team Management\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Leadership & Team Management\",\"description\":\"Certificate in leadership and management skills for collaborative and creative environments.\",\"cover\":\"/images/certifications/leadership.png\",\"layout\":\"Certification\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"certifications/leadership.md\",\"excerpt\":\"<p>This certification strengthens <strong>team management</strong>, <strong>leadership</strong>, and <strong>communication</strong> skills.<br>\\nIt emphasizes the ability to guide projects, coordinate design sprints, and motivate teams effectively.</p>\\n\"}")
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
