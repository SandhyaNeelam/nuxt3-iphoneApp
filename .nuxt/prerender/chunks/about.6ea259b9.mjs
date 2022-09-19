import { ssrRenderAttrs } from 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/ohmyfetch/dist/node.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/@vue/shared/index.js';
import './nitro-prerenderer.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt_3/nuxt3_iphoneApp/node_modules/unstorage/dist/drivers/fs.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>about</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about.6ea259b9.mjs.map
