
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://TebanV07.github.io/mi-page-web/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mi-page-web"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 22112, hash: '6b868368d6bdbde68e176338223583a5d14f5285b065b9a35f3ab74c18898af4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22394, hash: 'a4b10c5cc202b917d3a6af8d66ad943e2702ace4bf4abae7e039914910482c75', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49900, hash: 'd32e6b3acad9b751d51fee303f1bb04728bb212b28409be13e3932013845f9e4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KMRFUWIR.css': {size: 496, hash: '1z/6qpqlPug', text: () => import('./assets-chunks/styles-KMRFUWIR_css.mjs').then(m => m.default)}
  },
};
