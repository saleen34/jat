import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueYouTubeEmbed from "vue-youtube-embed";
import VueCountdownTimer from "vuejs-countdown-timer";

Vue.use(VueCountdownTimer);
Vue.config.productionTip = false
Vue.use(VueYouTubeEmbed);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
