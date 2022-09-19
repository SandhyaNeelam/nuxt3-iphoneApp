import { c as useCart, e as useAuth, f as usePageVisitCount, a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { useSSRContext, withCtx, createTextVNode, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "@vue/shared";
const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = useCart();
    console.log(cart.value.length);
    const auth = useAuth();
    const pageVisitCount = usePageVisitCount();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="bg-purple-900 shadow-lg p-3 text-white text-lg flex justify-between"><div class="flex">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "mr-4",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "mr-4",
        to: "/iphone"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Iphones`);
          } else {
            return [
              createTextVNode("Iphones")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p>Cart(${ssrInterpolate(unref(cart).length)})</p><p class="mr-4">Total Route Changed: ${ssrInterpolate(unref(pageVisitCount))}</p></div>`);
      if (unref(auth).isAuthenticated) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Profile`);
            } else {
              return [
                createTextVNode("Profile")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="ml-4">Logout</button></div>`);
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`LogIn`);
            } else {
              return [
                createTextVNode("LogIn")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</nav></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default.173c77d4.js.map
