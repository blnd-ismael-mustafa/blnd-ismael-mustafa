export const typesMap = JSON.parse("{\"project\":{\"/\":{\"path\":\"/project/\",\"indexes\":[0,1,2,3]}},\"skill\":{\"/\":{\"path\":\"/skill/\",\"indexes\":[4,5,6,7]}},\"certification\":{\"/\":{\"path\":\"/certification/\",\"indexes\":[8,9,10,11]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

