import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/projects/kaka.html.vue"
const data = JSON.parse("{\"path\":\"/projects/kaka.html\",\"title\":\"G Commerce\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"G Commerce\",\"description\":\"E-Commerce mobile app\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"projects/kaka.md\",\"excerpt\":\"\\n<p><img src=\\\"/images/projects/gcommerce.jpg\\\" alt=\\\"G Commerce Screenshot\\\"></p>\\n<p>G Commerce is a modern e-commerce mobile app design that focuses on clean UI and intuitive user experience.</p>\\n<p><strong>Key Features</strong></p>\\n<ul>\\n<li>Smart shopping experience</li>\\n<li>Modern layout and color palette</li>\\n<li>Designed with Figma</li>\\n</ul>\"}")
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
