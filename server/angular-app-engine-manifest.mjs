
export default {
  basePath: 'https://tebanv07.github.io/mi-page-web',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
