// Config file for env variables
// Warning: If you change this file the server must be restarted

module.exports = {
	dev: {
		DEV_PORT: 8080,
		NODE_ENV: '"development"',
		PLATFORM: '"dev"',
	},

	web: {
		NODE_ENV: '"production"',
		PLATFORM: '"web"',
	},

	mobile: {
		NODE_ENV: '"production"',
		PLATFORM: '"mobile"',
	},
}
