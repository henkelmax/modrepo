import Vue from 'vue'
import { ObserveVisibility } from 'vue-observe-visibility'

Vue.directive('observe-visibility', ObserveVisibility)

Vue.prototype.$eventBus = new Vue();

Vue.prototype.$eventBus.$on('push', path => {
  let p = Vue.prototype.$nuxt.localePath(path);
  if (p !== Vue.prototype.$nuxt._router.currentRoute.path) {
    Vue.prototype.$nuxt._router.push(p);
  }
  window.scrollTo(0, 0);
});
