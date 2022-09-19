import { d as defineNuxtRouteMiddleware, e as useAuth } from "../server.mjs";
import "vue";
import "vue-router";
import "destr";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "h3";
import "defu";
import "@vue/shared";
import "vue/server-renderer";
const auth = defineNuxtRouteMiddleware(() => {
  const auth2 = useAuth();
  console.log("middleware");
  return auth2.value.isAuthenticated;
});
export {
  auth as default
};
//# sourceMappingURL=auth.fb87bdf9.js.map
