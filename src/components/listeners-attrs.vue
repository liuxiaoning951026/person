<template>
  <div>
    <div class="div1">
       <com-a :value="value" :message="message" @changeVal="changeVal" @changeListen="changeListen" :date="date"></com-a>
    </div>
  </div>
</template>
<script>
import comA from '../experise/comA.vue'
export default {
  name: 'listeners-attrs',
  components: {
    comA
  },
  provide: {
    name: 'liuning'
  },
  data () {
    return {
      value: '111111',
      message: '消息请查收～～～',
      date: new Date()
    }
  },
  methods: {
    changeVal (val) {
      console.log(val)
    },
    changeListen (val) {
      console.log(val)
    }
  }
}
</script>
<style>
* {
  margin: 0 auto;
  padding: 0;
}
.div1 {
  background: pink;
  width: 50%;
  height: 300px;
  /* float: right; */
}
</style>
