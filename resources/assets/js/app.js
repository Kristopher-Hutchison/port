
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// require('./slick');

require('./custom');

window.Vue = require('vue');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Slick from 'vue-slick';
Vue.component('slick', Slick);
Vue.use(Slick);


import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import About from './components/About.vue';
import Home from './components/Home.vue';
import Cv from './components/Cv.vue';
import Resume from './components/Resume.vue';
import Portfolio from './components/Portfolio.vue';

import Ctgc from './components/Ctgc.vue';
import Vmware from './components/Vmware.vue';
import Cisco from './components/Cisco.vue';
import Pears from './components/Pears.vue';
import Verizonmeet from './components/Verizonmeet.vue';
import Pearreports from './components/pearreports.vue';
import Verizonconnectivity from './components/Verizonconnectivity.vue';
import Mwl from './components/Mwl.vue';
import Imbibe from './components/Imbibe.vue';
import Mine from './components/Mine.vue';
import Sweetango from './components/Sweetango.vue';
import Naturipe from './components/Naturipe.vue';


const routes = [
  {
      name: 'Home',
      path: '/',
      component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'Cv',
    path: '/cv',
    component: Cv
  },
  {
    name: 'Resume',
    path: '/resume',
    component: Resume
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    component: Portfolio
  },
  {
    name: 'Ctgc',
    path: '/portfolio/ctgc',
    component: Ctgc
  },
  {
    name: 'Vmware',
    path: '/portfolio/vmware',
    component: Vmware
  },
  {
    name: 'Cisco',
    path: '/portfolio/cisco',
    component: Cisco
  },
  {
    name: 'Pears',
    path: '/portfolio/canned-pears',
    component: Pears
  },
  {
    name: 'Verizonmeet',
    path: '/portfolio/verizon-meet',
    component: Verizonmeet
  },
  {
    name: 'Pearreports',
    path: '/portfolio/pear-reports',
    component: Pearreports
  },
  {
    name: 'Verizonconnectivity',
    path: '/portfolio/verizon-connectivity',
    component: Verizonconnectivity
  },
  {
    name: 'Mwl',
    path: '/portfolio/mwl',
    component: Mwl
  },
  {
    name: 'Sweetango',
    path: '/portfolio/sweetango',
    component: Sweetango
  },
  {
    name: 'Naturipe',
    path: '/portfolio/naturipe',
    component: Naturipe
  },
  {
    name: 'Imbibe',
    path: '/portfolio/imbibe',
    component: Imbibe
  },
  {
    name: 'Mine',
    path: '/portfolio/mine',
    component: Mine
  }
];

const router = new VueRouter(

                      { 
                        mode: 'history', 
                        routes: routes,
                        // transition: slide
                      }
                  );

// new Vue(
  
//         Vue.util.extend(
//             { router }
//         )
//     ).$mount('#app');

new Vue({
      el:'#app',
      router
});


new Vue({

  components: { Slick },

  data() {
      return {
          slickOptions: {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            prevArrow: 'prev'
              // Any other options that can be got from plugin documentation
          },
      };
  },

  // All slick methods can be used too, example here
  methods: {
      next() {
          this.$refs.slick.next();
      },

      prev() {
          this.$refs.slick.prev();
      },

      reInit() {
          // Helpful if you have to deal with v-for to update dynamic lists
          this.$nextTick(() => {
              this.$refs.slick.reSlick();
          });
      },
  },
});