<template>
  <div class="div">
    <div class="div1" v-for="(item, index) in list" :key="index" :style="{'animation-delay': index === 0 ? '0s' : `${index * 2}s`}">
    </div>
  </div>
</template>
<script>
export default {
  name: 'css3',
  data () {
    return {
      list: [
        {
          name: '终端名称',
          value: 0
        },
        {
          name: '终端名称',
          value: 2
        },
        {
          name: '终端名称',
          value: 4
        },
        {
          name: '终端名称',
          value: 6
        }
      ]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.div {
  position: absolute;
  left: 20%;
  border: 1px solid red;
  padding: 10px;
}
.div1 {
  width: 200px;
  height: 200px;
  background-color: aquamarine;
  animation: myFirstAnimation 2s ease-in-out;
  margin-right: 20px;
  float: left;
  /* animation-delay:2s; */
  /* transition: transform 2s ease-in-out; */
}
/* .div1:hover{
transform: rotate(360deg);
} */

@keyframes myFirstAnimation {
  form { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
}
</style>
