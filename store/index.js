import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'
// import globalConfig from './modules/globalConfig'
Vue.use(Vuex)
// const store = new Vuex.Store({
//   modules: {
//     globalConfig
//   }
// })
// export default store
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
