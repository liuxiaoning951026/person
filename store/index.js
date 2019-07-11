import Vue from 'vue'
import Vuex from 'vuex'
import globalConfig from './modules/globalConfig'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    globalConfig
  }
})
export default store