import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/certifications/google.html.vue"
const data = JSON.parse("{\"path\":\"/certifications/google.html\",\"title\":\"Google UX Design Specialization\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Google UX Design Specialization\",\"description\":\"Professional certificate by Google covering UX design foundations, research, and prototyping.\",\"cover\":\"/images/certifications/google-ux.png\",\"layout\":\"Certification\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"certifications/google.md\",\"excerpt\":\"<p>The <strong>Google UX Design Specialization</strong> teaches the complete UX process — from <strong>user research</strong> and <strong>wireframing</strong> to <strong>prototyping</strong> and <strong>testing</strong>.<br>\\nIt focuses on <strong>practical design skills</strong> using Figma and real-world UX workflows.</p>\"}")
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
