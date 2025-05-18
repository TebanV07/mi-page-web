
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://tebanv07.github.io/mi-page-web/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mi-page-web"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 22112, hash: '715808b2aad4f5a10b5bc5530200fefb1fcadcb17c7a4954b957f754e36ad7cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22394, hash: 'facd4a42628913cd738fbce06d05d0a938c67c15e903a3c775ebdd2698ae5219', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49900, hash: '6c46544543b08addef34be27f1868019859f4faa364f7e5a405f4ff44f99bb71', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KMRFUWIR.css': {size: 496, hash: '1z/6qpqlPug', text: () => import('./assets-chunks/styles-KMRFUWIR_css.mjs').then(m => m.default)}
  },
};
