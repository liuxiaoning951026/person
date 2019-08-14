<template>
  <div>
    <!-- <el-button type="primary" @click="reverseMessage">点击</el-button> -->
    <!-- {{reverseMessage}} -->
  </div>
</template>
<script>
export default {
  name: 'watch-component',
  computed: {
    reverseMessage () {
      return this.message.split('').reverse().join('')
    }
  },
  data () {
    return {
      message: 'hello'
    }
  }
}
</script>
