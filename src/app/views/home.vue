<template lang='pug'>

#home(:style='`background:${ color }`')
	.links
		a(href='https://ellipticaldoor.com/') My Blog
		span |
		a(href='https://github.com/ellipticaldoor/get-color-by-text') Github

	textarea(v-model='text', autofocus)

	.color {{ color }}
	.color {{ slug }}

</template>

<script src='./home' /></script>
