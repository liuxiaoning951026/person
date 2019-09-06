<template>
  <div>
    <el-button @click="back" type="primary">back</el-button>
    <el-button @click="forward" type="info">forward</el-button>
  </div>
</template>
<script>
export default {
  name: 'window-history-component',
  data () {
    return {
      stateObj: {
        foo: 'bar'
      }
    }
  },
  methods: {
    back () {
      // window.history.back()
      // console.log(window.history.length)
      history.pushState(this.stateObj, 'page 2', 'bar.html') // 不刷新页面的情况下，使控制台中的utl地址变为pushStateAPI中最后一个参数
      console.log(history.state)
    },
    forward () {
      window.history.forward()
    }
  },
  created () {
    console.log('全部：', window.location)
  }
}
</script>
