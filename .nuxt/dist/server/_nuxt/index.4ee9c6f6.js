import { u as useHead, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Iphones"
    });
    const iphones = ["iphone12", "iphone12-pro", "iphone13", "iphone13-pro"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-4 gap-4 mt-10" }, _attrs))}><!--[-->`);
      ssrRenderList(iphones, (iphone) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: iphone,
          to: `/iphone/${iphone}`,
          class: "shadow-lg text-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h1${_scopeId}>${ssrInterpolate(iphone)}</h1><div class="flex justify-center"${_scopeId}><img width="200"${ssrRenderAttr("src", `/images/${iphone}.webp`)} alt=""${_scopeId}></div>`);
            } else {
              return [
                createVNode("h1", null, toDisplayString(iphone), 1),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("img", {
                    width: "200",
                    src: `/images/${iphone}.webp`,
                    alt: ""
                  }, null, 8, ["src"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/iphone/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.4ee9c6f6.js.map
