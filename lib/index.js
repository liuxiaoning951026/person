// 引入想要打到npm中的组件
import Loading from './loading.vue'
export const install = function (Vue, opts = {}) {
  Vue.component(Loading.name, Loading)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
