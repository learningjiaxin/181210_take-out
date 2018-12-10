/**
 * 入口js000000
 */
import Vue from 'vue'
import App from './App'

import router from './router/index'

new Vue({
    el:'#app',
    render:h => h(App),
    router
})