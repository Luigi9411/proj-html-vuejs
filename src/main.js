import Vue from 'vue';

import 'bootstrap'; // importazione del js di bootstrap

import { library } from '@fortawesome/fontawesome-svg-core'; // libreria icone del progetto
import {
  faMagnifyingGlass, faChevronLeft, faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faUser, faFolder, faComments } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
// eslint-disable-next-line
library.add(faMagnifyingGlass, faChevronLeft, faChevronRight, faUser, faFolder, faComments, faTwitter );
Vue.component('FontAwesomeIcon', FontAwesomeIcon); // registrazione globale del componente FontAwesomeIcon per renderlo usabile in qualsiasi parte del codice senza ulteriore importazione

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
