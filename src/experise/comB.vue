<template>
  <div>
    <div class="div3">
      我是组件B
      <p>message： {{message}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component-b',
  props: {
    message: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
    console.log('this.$listeners=====', this.$listeners)
    this.$emit('changeVal', '我是孙子组件中所传的changeVal')
    this.$emit('changeListen', '我是孙子组件中所传的changeListen')
  }
}
</script>
<style scoped>
.div3 {
  width: 150px;
  height: 150px;
  background-color:bisque;
  border: 1px solid orange;
}
</style>
