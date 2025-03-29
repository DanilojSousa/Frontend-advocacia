
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23986, hash: '95b4bcb062cefe497b51603e424cab715caee42fc438733e2398f5f655b95c92', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17560, hash: '641e1ab6a436807c1e91f954d6fe6669d2ba3e2c2434984df1366931e0ac0824', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 113038, hash: '582d635e8a05c129bfc4986b0c4439a019ed321f4b88ce491f16bc389899da0a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QWEZXS6D.css': {size: 7854, hash: 'alMr1R4aHbk', text: () => import('./assets-chunks/styles-QWEZXS6D_css.mjs').then(m => m.default)}
  },
};
