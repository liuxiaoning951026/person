<template>
  <div>
    <div class="outer-div">
      {{title}}
      <!-- <el-button type="primary"></el-button> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'first-component',
  data () {
    return {
      title: this.$store.state.title
    }
  },
  methods: {
    getQueryString (name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) { return decodeURI(r[2]) }
      return 'http://baidu.com'
    }
  },
  computed: {
    changePeople () {
      return this.$store.getters.changePeople
    }
  },
  created () {
    /**
     * 针对state使用
    */
    // console.log(this.$store.state.title)
    /**
     * 针对mutation使用
    */
    // const keyCode = sessionStorage.keyCode = this.getQueryString('keyCode')
    // const keyWord = sessionStorage.keyWord = keyCode.split('-')[0]
    // const hunterCode = sessionStorage.hunterCode = keyCode.split('-')[1]
    // const sid = sessionStorage.sid = this.getQueryString('sid')
    // const ck = sessionStorage.ck = this.getQueryString('ck')
    // const tm = sessionStorage.tm = this.getQueryString('tm')
    // this.$store.commit('getParams', {
    //   keyCode,
    //   keyWord,
    //   hunterCode,
    //   sid,
    //   ck,
    //   tm
    // })
    // console.log(this.$store.state.START_PARMA)
    /**
     * 针对getters使用
    */
    // console.log(this.changePeople)
    /**
     * 针对action使用
    */
    // const keyCode = sessionStorage.keyCode = this.getQueryString('keyCode')
    // const keyWord = sessionStorage.keyWord = keyCode.split('-')[0]
    // const hunterCode = sessionStorage.hunterCode = keyCode.split('-')[1]
    // const sid = sessionStorage.sid = this.getQueryString('sid')
    // const ck = sessionStorage.ck = this.getQueryString('ck')
    // const tm = sessionStorage.tm = this.getQueryString('tm')
    // this.$store.dispatch('getParamsSync', {
    //   keyCode,
    //   keyWord,
    //   hunterCode,
    //   sid,
    //   ck,
    //   tm
    // })
    /**
     * 组件见调用
    */
    const keyCode = sessionStorage.keyCode = this.getQueryString('keyCode')
    const keyWord = sessionStorage.keyWord = keyCode.split('-')[0]
    const hunterCode = sessionStorage.hunterCode = keyCode.split('-')[1]
    const sid = sessionStorage.sid = this.getQueryString('sid')
    const ck = sessionStorage.ck = this.getQueryString('ck')
    const tm = sessionStorage.tm = this.getQueryString('tm')
    this.$store.dispatch('getParamsSync', {
      keyCode,
      keyWord,
      hunterCode,
      sid,
      ck,
      tm
    }).then((res) => {
      // console.log(res)
      this.$store.dispatch('changeTitleSync', res)
    })
  }
}
</script>
<style>
.outer-div {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: bisque;
}
</style>
