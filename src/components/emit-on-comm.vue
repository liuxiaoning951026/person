<template>
  <div>
    <h3>我是自组件中的内容</h3>
    <hello-world @data="checkData"></hello-world>
    <slot-parents></slot-parents>
  </div>
</template>
<script>
import helloWorld from './HelloWorld.vue'
import slotParents from './slotParents.vue'
export default {
  name: 'emit-on-comm',
  components: {
    helloWorld,
    slotParents
  },
  data () {
    return {
      aa: 'ddd'
    }
  },
  methods: {
    checkData (val) {
      console.log(val)
    }
  }
}
</script>
<style scoped>
</style>
