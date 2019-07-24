export default {
  // 未进行异步请求时
  // getParamsSync (context, Object) {
  //   setTimeout(() => {
  //     context.commit('getParams', Object)
  //   }, 3000)
  // }
  // 结合Promise使用时
  getParamsSync (context, Object) {
    return new Promise((reslove, reject) => {
      setTimeout(() => {
        context.commit('getParams', Object)
        return reslove('成功')
      }, 3000)
    })
  },
  changeTitleSync ({ commit }, title) {
    // console.log(commit)
    setTimeout(() => {
      commit('changeTitle', title)
    }, 3000)
  }
}