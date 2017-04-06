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
	},

	methods: {
		update () {
			this.$router.replace(`/?q=${ this.text }`)
		},
	},

	watch: {
		text () {
			this.update()
		},
	},

	created () {
		const query = this.$route.query

		if (Object.keys(query).length !== 0)
			this.text = query.q.replace(/_/g, ' ')

		this.update()
	},
}
