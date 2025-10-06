import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/projects/project-1.html.vue"
const data = JSON.parse("{\"path\":\"/projects/project-1.html\",\"title\":\"GCommerce\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"GCommerce\",\"description\":\"E Commerce App\",\"cover\":\"/images/projects/gcommerce.jpg\",\"heroText\":\" \",\"tagline\":\" \"},\"headers\":[],\"git\":{\"updatedTime\":1759715534000,\"contributors\":[{\"name\":\"Blndm01\",\"username\":\"Blndm01\",\"email\":\"blndbargrkaye@gmail.com\",\"commits\":2,\"url\":\"https://github.com/Blndm01\"}],\"changelog\":[{\"hash\":\"723620869bd0161f9f74c804ea45b26ff1e43e97\",\"time\":1759715534000,\"email\":\"blndbargrkaye@gmail.com\",\"author\":\"Blndm01\",\"message\":\"Deploy site\"},{\"hash\":\"c5e5bc29ac2c2b857dc4a8a0ade7e19b8cc95215\",\"time\":1759713750000,\"email\":\"blndbargrkaye@gmail.com\",\"author\":\"Blndm01\",\"message\":\"deploy\"}]},\"filePathRelative\":\"projects/project-1.md\",\"excerpt\":\"<div class=\\\"project-page gcommerce\\\">\\n  <header class=\\\"project-header\\\">\\n    <h1>🛍️ G Commerce</h1>\\n    <p class=\\\"subtitle\\\">E-Commerce Mobile App • Clean Shopping Flow • Modern UI</p>\\n  </header>\\n  <div class=\\\"project-image\\\">\\n    <img src=\\\"/images/projects/gcommerce.jpg\\\" alt=\\\"G Commerce Project Screenshot\\\">\\n  </div>\\n  <section class=\\\"project-details\\\">\\n    <h2>💡 Overview</h2>\\n    <p>\\n      G Commerce reimagines the online shopping experience with a focus on clarity, minimalism, \\n      and delightful microinteractions. Its clean product grid and bright accents make browsing intuitive.\\n    </p>\\n    <h2>🎨 Design Highlights</h2>\\n    <ul>\\n      <li>Pastel-based color palette with soft contrast</li>\\n      <li>Streamlined checkout flow with 2-step confirmation</li>\\n      <li>Card-based product previews</li>\\n    </ul>\\n    <a href=\\\"https://www.behance.net/gallery/202590359/G-Commerce-UXUI-Design\\\" target=\\\"_blank\\\" class=\\\"btn\\\">View on Behance</a>\\n  </section>\\n</div>\"}")
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
