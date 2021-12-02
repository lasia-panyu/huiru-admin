<script>
	import {
		mapGetters,
		mapActions,
		mapMutations
	} from 'vuex'
	import config from '@/admin.config.js'
	import { version } from './package.json'
	export default {
		computed: {
			...mapGetters({
				isTokenValid: 'user/isTokenValid'
			})
		},
		methods: {
			...mapActions({
				init: 'app/init'
			}),
			...mapMutations({
				setPage:'user/SET_PAGE'
			})
		},
		onPageNotFound(msg) {
			console.log("onPageNotFound");
			uni.redirectTo({
				url: config.error.url
			})
		},
		onLaunch: function(msg) {
			console.log(
			        `%c uniCloud Admin %c 当前版本号 v${version} %c`,
			        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
			        'background:#007aff ;padding: 1px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;',
			        'background:transparent'
			      )
			console.log('App Launch')
			console.log(msg)
			if(msg.path=="pages/fuyin_privacy/privacy"||msg.path=="pages/login/loginapp"){
				this.setPage(msg.path)
				console.log("yes")
				return ;
			}
			if (!this.isTokenValid) {
				console.log("yes1111111111111")
				uni.redirectTo({
					url: config.login.url
				})
			} else {
				this.init()
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import '@/common/uni.css';
	@import '@/common/uni-icons.css';
</style>
