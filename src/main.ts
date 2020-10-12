import "@/css/global.scss";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueCompositionAPI from "@vue/composition-api";
import AOS from "aos";
import "aos/dist/aos.css";
import VueScrollactive from "vue-scrollactive";
import "pattern.css/dist/pattern.css";

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);
Vue.use(VueScrollactive);

new Vue({
  router,
  store,
  created() {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "aos-animate",
      once: true,
    });
  },
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount("#app");
