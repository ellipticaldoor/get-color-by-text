// Vue
import Vue from 'vue'
import App from './app/app.vue'

// Config
Vue.config.productionTip = false

// Styles
import 'normalize.css'
import 'milligram'
import './styles/material_icons.sass'

var vm = new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
})

window.vm = vm
