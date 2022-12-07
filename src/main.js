import Vue from 'vue';

import 'bootstrap'; // importazione del js di bootstrap

import { library } from '@fortawesome/fontawesome-svg-core'; // libreria icone del progetto
import { faMagnifyingGlass, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; // importazione del componente FontAwesomeIcon

import App from './App.vue';

library.add(faMagnifyingGlass, faChevronLeft, faChevronRight);
Vue.component('FontAwesomeIcon', FontAwesomeIcon); // registrazione globale del componente FontAwesomeIcon per renderlo usabile in qualsiasi parte del codice senza ulteriore importazione

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
