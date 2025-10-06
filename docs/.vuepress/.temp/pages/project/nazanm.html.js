import comp from "C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/project/nazanm.html.vue"
const data = JSON.parse("{\"path\":\"/project/nazanm.html\",\"title\":\"Barber Booking System\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Barber Booking System\",\"year\":2024,\"stack\":[\"Vue\",\"Node.js\",\"MySQL\"],\"category\":[\"Web App\"],\"excerpt\":\"A booking dashboard for barbers to manage clients, schedules, and analytics.\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"project/nazanm.md\"}")
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
