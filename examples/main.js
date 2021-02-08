import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import xshui from "../packages";
Vue.use(xshui);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
