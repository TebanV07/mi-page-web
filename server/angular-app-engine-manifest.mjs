
export default {
  basePath: 'https://TebanV07.github.io/mi-page-web',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
