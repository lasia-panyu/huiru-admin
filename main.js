import Vue from 'vue'
import App from './App'
import store from './store'
import plugin from './js_sdk/uni-admin/plugin'
import VueParticlesBg from "particles-bg-vue"


Vue.use(plugin)
Vue.use(VueParticlesBg)

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})

import util from '@/common/util.js'
Vue.prototype.$util = util//赋值到vue里面

app.$mount()
