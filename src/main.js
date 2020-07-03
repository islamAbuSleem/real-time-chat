import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import vueChatSrcoll from "vue-chat-scroll";

Vue.use(vueChatSrcoll);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
