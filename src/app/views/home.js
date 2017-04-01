import './home.sass'
import md5 from 'js-md5'

export default {
	name: 'home',

	data () { return {
		text: 'Get color by text 😎',
	}},

	computed: {
		color () {
			return '#' + md5(`'${ this.text }'`).substring(0, 6)
		},

		slug () {
			return this.text.replace(/\s+/g, '_')
		},
	},

	methods: {
		update () {
			this.$router.push(`/?${ this.slug }`)
		},
	},

	watch: {
		slug () {
			this.update()
		},
	},

	created () {
		this.update()
	},
}
