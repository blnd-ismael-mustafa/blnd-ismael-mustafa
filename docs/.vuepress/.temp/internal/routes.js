export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Blnd Ismael"} }],
  ["/certifications/google.html", { loader: () => import(/* webpackChunkName: "certifications_google.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/certifications/google.html.js"), meta: {"_blog":{"title":"Google UX Design Specialization","description":"Professional certificate by Google covering UX design foundations, research, and prototyping.","cover":"/images/certifications/google-ux.png"},"title":"Google UX Design Specialization"} }],
  ["/certifications/leadership.html", { loader: () => import(/* webpackChunkName: "certifications_leadership.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/certifications/leadership.html.js"), meta: {"_blog":{"title":"Leadership & Team Management","description":"Certificate in leadership and management skills for collaborative and creative environments.","cover":"/images/certifications/leadership.png"},"title":"Leadership & Team Management"} }],
  ["/certifications/ML.html", { loader: () => import(/* webpackChunkName: "certifications_ML.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/certifications/ML.html.js"), meta: {"_blog":{"title":"AI & Machine Learning Bootcamp","description":"Comprehensive course on data science, machine learning, and AI using Python.","cover":"/images/certifications/ML.jpg"},"title":"AI & Machine Learning Bootcamp"} }],
  ["/certifications/ux-ztm.html", { loader: () => import(/* webpackChunkName: "certifications_ux-ztm.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/certifications/ux-ztm.html.js"), meta: {"_blog":{"title":"Complete Web & Mobile Designer (ZTM)","description":"Full-stack UI/UX course by Zero to Mastery covering Figma, prototyping, and responsive design.","cover":"/images/certifications/ux-ztm.png"},"title":"Complete Web & Mobile Designer (ZTM)"} }],
  ["/projects/project-1.html", { loader: () => import(/* webpackChunkName: "projects_project-1.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/projects/project-1.html.js"), meta: {"_blog":{"title":"GCommerce","description":"E Commerce App","cover":"/images/projects/gcommerce.jpg"},"title":"GCommerce"} }],
  ["/projects/project-2.html", { loader: () => import(/* webpackChunkName: "projects_project-2.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/projects/project-2.html.js"), meta: {"_blog":{"title":"Kurd Ferga","description":"Educational Website","cover":"/images/projects/kurd-ferga.png"},"title":"Kurd Ferga"} }],
  ["/projects/project-3.html", { loader: () => import(/* webpackChunkName: "projects_project-3.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/projects/project-3.html.js"), meta: {"_blog":{"title":"NetMard","description":"Grocery mobile app","cover":"/images/projects/netmart.png"},"title":"NetMard"} }],
  ["/projects/project-4.html", { loader: () => import(/* webpackChunkName: "projects_project-4.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/projects/project-4.html.js"), meta: {"_blog":{"title":"Sayay Farmuda","description":"Hadith Website","cover":"/images/projects/sayay-farmuda.png"},"title":"Sayay Farmuda"} }],
  ["/skills/figma.html", { loader: () => import(/* webpackChunkName: "skills_figma.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/skills/figma.html.js"), meta: {"_blog":{"title":"Figma","description":"Powerful UI design tool for collaborative prototyping.","cover":"/images/skills/figma.png"},"title":"Figma"} }],
  ["/skills/numpy.html", { loader: () => import(/* webpackChunkName: "skills_numpy.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/skills/numpy.html.js"), meta: {"_blog":{"title":"NumPy","description":"Python library for fast numerical computing and multi-dimensional arrays.","cover":"/images/skills/numpy.png"},"title":"NumPy"} }],
  ["/skills/pandas.html", { loader: () => import(/* webpackChunkName: "skills_pandas.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/skills/pandas.html.js"), meta: {"_blog":{"title":"Pandas","description":"Data analysis and manipulation tool built on top of Python.","cover":"/images/skills/panda.png"},"title":"Pandas"} }],
  ["/skills/scikit.html", { loader: () => import(/* webpackChunkName: "skills_scikit.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/skills/scikit.html.js"), meta: {"_blog":{"title":"Scikit-learn","description":"Machine learning library for Python, offering efficient tools for predictive modeling and analysis.","cover":"/images/skills/scikit.png"},"title":"Scikit-learn"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/project/", { loader: () => import(/* webpackChunkName: "project_index.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/project/index.html.js"), meta: {"title":"Projects"} }],
  ["/skill/", { loader: () => import(/* webpackChunkName: "skill_index.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/skill/index.html.js"), meta: {"title":"Skills"} }],
  ["/certification/", { loader: () => import(/* webpackChunkName: "certification_index.html" */"C:/Users/Blnd.PC/Desktop/new/vuepress-starter/docs/.vuepress/.temp/pages/certification/index.html.js"), meta: {"title":"Certifications"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
