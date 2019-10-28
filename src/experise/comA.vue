<template>
  <div>
    <div class="div2">
      我是组件A
      <!-- <p>attrs: {{$attrs}}</p> -->
      <!-- <p>message: {{message}}</p> -->
      <com-b v-bind="$attrs" v-on="$listeners" :message="message"></com-b>
    </div>
  </div>
</template>
<script>
import comB from '../experise/comB.vue'
export default {
  name: 'component-a',
  components: {
    comB
  },
  inject: ['name'],
  props: {
    message: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  created () {
    console.log(this.name)
  }
}
</script>
<style scoped>
.div2 {
  width: 200px;
  height: 200px;
  background-color: antiquewhite;
  border: 1px solid red;
}
</style>
