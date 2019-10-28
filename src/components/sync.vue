<template>
  <div>
    <el-button @click="toggle">切换</el-button>
    <child-component :visible.sync="show"></child-component>
  </div>
</template>
<script>
// 注册子组件
var childComponent = {
  template: '<div class="div1" v-if="visible">我是child-components<span @click="close">X</span></div>',
  props: {
    visible: {
      type: Boolean
    }
  },
  watch: {
    visible: (val) => {
      console.log('子组件watch====', val)
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    close () {
      // this.visible = false
      this.$emit('update:visible', false)
    }
  }
}
export default {
  name: 'sync-components',
  components: {
    'child-component': childComponent
  },
  watch: {
    show: (newVal) => {
      console.log('父组件watch====', newVal)
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
      console.log('切换=====', this.show)
    }
  }
}
</script>
<style scoped>
.div1 {
  width: 300px;
  height: 300px;
  background-color: antiquewhite;
}
</style>
