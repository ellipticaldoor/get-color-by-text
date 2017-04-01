// Vue
import Vue from 'vue'
import App from './app/app.vue'
import VueRouter from 'vue-router'

// Config
Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter()

// Styles
import 'normalize.css'
import 'milligram'
import './styles/material_icons.sass'

var vm = new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
})

window.vm = vm
