// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue.js'
import firebase from 'firebase/app';
import 'firebase/auth';

import './db';

import App from './App'
import router from './router'
import store from './store'
import BaseView from './components/common/BaseView'

// Vue.config.productionTip = false

// Create global filter
Vue.filter('snippet', val => {
    if (!val || typeof(val) !== 'string'){
        return '';
    } else if (val = val.slice(0,32)){
        return val;
    }
})

Vue.component('BaseView', BaseView);

firebase.auth();

let app;
firebase.auth().onAuthStateChanged((user) => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            components: { App },
            template: '<App/>'
        })
    }
    store.commit('setUser', user);
})
