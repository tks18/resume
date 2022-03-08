import Vue from 'vue';
import Meta from 'vue-meta';
import App from './App.vue';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true,
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
