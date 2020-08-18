import Vue from 'vue';
import { ObserveVisibility } from 'vue-observe-visibility';
import router from '~/plugins/router.js';

Vue.directive('observe-visibility', ObserveVisibility);

Vue.mixin(router);
