// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'
import axios from 'axios'

//axios全局配置
axios.defaults.baseURL = "https://wd9078961936zrxzvo.wilddogio.com"

Vue.config.productionTip = false

// Vue.use(VueResource)
Vue.use(VueRouter)

//自定义指令
// Vue.directive('rainbow', {
//     bind(el, binding, vnode) {
//         el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//     }
// })

// Vue.directive('theme', {
//     bind(el, binding, vnode) {
//         if (binding.value == 'wide') {
//             el.style.maxWidth = '1260px';
//         } else if (binding.value == 'narrow') {
//             el.style.maxWidth = '600px';
//         }
//     }
// })

//自定义过滤器
// Vue.filter('to-uppercase', function(value) {
//     return value.toUpperCase()
// })

// Vue.filter('snippet', function(value) {
//     return value.slice(0, 100) + '...'
// })

//路由配置
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router: router
})