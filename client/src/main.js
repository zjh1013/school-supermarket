import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { Icon, Carousel } from "element-ui";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import BaiduMap from "vue-baidu-map";
import { Skeleton, Notify, Field, Button } from "vant";
Vue.use(Skeleton);
Vue.use(Notify);
Vue.use(Field);
Vue.use(Button);
Vue.use(BaiduMap, {
  ak: "p9s648T0msKfn6bW47uzLCRnvQZ5i1ev"
});
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.use(Icon);
Vue.use(Carousel);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
