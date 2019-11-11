<template>
  <div>
    <!-- <p>通过按钮来触发watch中的一个对象</p>-->
    <el-button @click="check" type="primary">点击</el-button>
    <!-- <div>
      <p>FullName: {{fullName}}</p>
      <p>FirstName: <input type="text" v-model="firstName"></p>
    </div> -->
    <div>
      <p>obj.a: {{obj.a}}</p>
      <p>obj.a: <input type="text" v-model="obj.a"></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'watch-deep',
  watch: {
    // obj: (val) => {
    //   console.log('val======', val)
    // },
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName
    //   console.log(this.fullName)
    // }
    // firstName: {
    //   handler (newName, oldName) {
    //     this.fullName = newName + ' ' + this.lastName
    //   },
    //   // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
    //   immediate: true
    // },
    'obj': {
      handler (newName, oldName) {
        console.log('obj.a changed')
      },
      immediate: true,
      deep: true
    }
  },
  data () {
    return {
      firstName: 'Dawei',
      lastName: 'Lou',
      fullName: '',
      obj: { a: 'liuning' }
    }
  },
  methods: {
    check () {
      // this.obj.a = 'liuning'
      // console.log(this.obj)
      console.log('this.$watch====', this.$watch)
      this.$nextTick(() => {
        console.log(this.obj.a)
      })
    }
  },
  mounted () {
    this.obj = {
      a: '456'
    }
  }
}
</script>
