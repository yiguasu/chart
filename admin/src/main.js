import Vue from "vue";
import App from "./App.vue";
import * as echarts from "echarts";
import "./main.css";
import "./plugins/element-ui";
import "./plugins/vue-echart";
Vue.config.productionTip = false;
//在每个组件实例上都挂载echarts，每个组件实例上都可以使用
// Vue.prototype.$echarts = echarts;
Vue.prototype.$echarts = echarts;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
