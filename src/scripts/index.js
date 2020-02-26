// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue.js'
import App from './App'
import router from './router'
import store from './store'
import BaseView from './components/common/BaseView'

Vue.config.productionTip = false

// Create global filter
Vue.filter('snippet', val => {
    if(!val || typeof(val) != 'string'){
        return ''
    }else if(val = val.slice(0,32)){
        return val
    }
})

Vue.component('BaseView', BaseView);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
