import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/projects/project-3.html.vue"
const data = JSON.parse("{\"path\":\"/projects/project-3.html\",\"title\":\"NetMard\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"NetMard\",\"description\":\"Grocery mobile app\",\"cover\":\"/images/projects/netmart.png\",\"heroText\":\" \",\"tagline\":\" \"},\"headers\":[],\"git\":{},\"filePathRelative\":\"projects/project-3.md\",\"excerpt\":\"<div class=\\\"project-page netmart\\\">\\n  <header class=\\\"project-header\\\">\\n    <h1>🛒 NetMart</h1>\\n    <p class=\\\"subtitle\\\">Grocery Delivery • Smart UX • Fresh Design</p>\\n  </header>\\n  <div class=\\\"project-image\\\">\\n    <img src=\\\"/images/projects/netmart.png\\\" alt=\\\"NetMart App Screenshot\\\">\\n  </div>\\n  <section class=\\\"project-details\\\">\\n    <h2>💡 Overview</h2>\\n    <p>\\n      NetMart is a grocery delivery app designed to feel fast, friendly, and familiar.\\n      Every interaction, from browsing to checkout, aims to reduce friction while maintaining personality.\\n    </p>\\n    <h2>🥬 Highlights</h2>\\n    <ul>\\n      <li>Bright green tones symbolizing freshness</li>\\n      <li>Quick navigation with sticky product filters</li>\\n      <li>One-hand thumb flow for mobile ergonomics</li>\\n    </ul>\\n    <a href=\\\"https://www.behance.net/gallery/210476423/NetMart-UXUI-Design\\\" target=\\\"_blank\\\" class=\\\"btn\\\">View on Behance</a>\\n  </section>\\n</div>\"}")
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
