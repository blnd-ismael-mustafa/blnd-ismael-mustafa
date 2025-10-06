import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Blnd Ismael\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"layout\":\"Layout\",\"title\":\"Blnd Ismael\",\"heroText\":\" \",\"tagline\":\" \",\"navbar\":true},\"headers\":[],\"git\":{\"updatedTime\":1759715534000,\"contributors\":[{\"name\":\"Blndm01\",\"username\":\"Blndm01\",\"email\":\"blndbargrkaye@gmail.com\",\"commits\":3,\"url\":\"https://github.com/Blndm01\"}],\"changelog\":[{\"hash\":\"723620869bd0161f9f74c804ea45b26ff1e43e97\",\"time\":1759715534000,\"email\":\"blndbargrkaye@gmail.com\",\"author\":\"Blndm01\",\"message\":\"Deploy site\"},{\"hash\":\"8923b1b2a0f88016d69e47c0373fd0df597cc26f\",\"time\":1759714251000,\"email\":\"blndbargrkaye@gmail.com\",\"author\":\"Blndm01\",\"message\":\"deploy\"},{\"hash\":\"c5e5bc29ac2c2b857dc4a8a0ade7e19b8cc95215\",\"time\":1759713750000,\"email\":\"blndbargrkaye@gmail.com\",\"author\":\"Blndm01\",\"message\":\"deploy\"}]},\"filePathRelative\":\"README.md\"}")
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
