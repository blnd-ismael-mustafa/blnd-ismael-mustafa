import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/projects/project-4.html.vue"
const data = JSON.parse("{\"path\":\"/projects/project-4.html\",\"title\":\"Sayay Farmuda\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Sayay Farmuda\",\"description\":\"Hadith Website\",\"cover\":\"/images/projects/sayay-farmuda.png\",\"heroText\":\" \",\"tagline\":\" \"},\"headers\":[],\"git\":{},\"filePathRelative\":\"projects/project-4.md\",\"excerpt\":\"<div class=\\\"project-page sayay\\\">\\n  <header class=\\\"project-header\\\">\\n    <h1>📖 Sayay Farmuda</h1>\\n    <p class=\\\"subtitle\\\">Hadith Platform • Calm Interface • Spiritual Design</p>\\n  </header>\\n  <div class=\\\"project-image\\\">\\n    <img src=\\\"/images/projects/sayay-farmuda.png\\\" alt=\\\"Sayay Farmuda Screenshot\\\">\\n  </div>\\n  <section class=\\\"project-details\\\">\\n    <h2>💡 Overview</h2>\\n    <p>\\n      Sayay Farmuda is a web experience designed for reflection and spiritual study.\\n      Every color and element invites users to read peacefully and stay connected with divine knowledge.\\n    </p>\\n    <h2>🌙 Design Touches</h2>\\n    <ul>\\n      <li>Soft night-blue theme with warm white typography</li>\\n      <li>Generous padding for relaxed reading</li>\\n      <li>Calm transitions and minimal distractions</li>\\n    </ul>\\n    <a href=\\\"https://www.behance.net/gallery/181824501/Sayay-Farmooda-UIUX-Design\\\" target=\\\"_blank\\\" class=\\\"btn\\\">View on Behance</a>\\n  </section>\\n</div>\"}")
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
