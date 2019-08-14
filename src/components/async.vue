<template>
  <div>
    <el-button type="primary" @click="check">查询</el-button>
  </div>
</template>
<script>
export default {
  name: 'async-component',
  data () {
    return {
    }
  },
  methods: {
    async getAsync () {
      console.log('进入async函数')
      return 11
    },
    async check () {
      // this.getAsync().then((data) => {
      //   console.log(data) // 11
      // })
      // console.log(this.getAsync())

      /**
      * 测试执行顺序
      */
      console.log('我是点击方法第一条')
      await this.getAsync()
      console.log('最后一条')
    }
  },
  created () {
    // this.getAsync()
    // let testArr = [1, 2, 3]
    // let flag = false
    // const func = (res) => {
    //   return new Promise((resolve, reject) => {
    //     if (res) {
    //       resolve(res)
    //     }
    //   })
    // }
    // testArr.map(async (item) => {
    //   await func(item).then(res => {
    //     flag = true
    //     console.log('res', res, flag)
    //   })
    //   console.log('inside', flag)
    // })

    // // console.log('flag', flag)

    // async function testAsync () {
    //   console.log('dfd')
    //   let res = await this.promise()
    //   return res
    // }
    // let result = testAsync()
    // console.log(result)
    // console.log('999')

    // var promise = () => {
    //   console.log('1')
    //   return new Promise(function (resolve, reject) {
    //     console.log('2')
    //     resolve('haha')
    //   })
    // }
    // console.log(promise())
    // console.log('3')

    /**
     * await 使用场景 -- start
    */
    function takeLongTime (n) {
      return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n)
      })
    }
    async function step1 (n) {
      console.log(`step1 with ${n}`)
      return takeLongTime(n)
    }
    async function step2 (m, n) {
      // console.log(m, n)
      console.log(`step2 with ${m} and ${n}`)
      return takeLongTime(m + n)
    }
    async function step3 (k, m, n) {
      // console.log(k, m, n)
      console.log(`step3 with ${k}, ${m} and ${n}`)
      return takeLongTime(k + m + n)
    }

    async function doIt () {
      const time1 = 300
      const time2 = await step1(time1) // 看到await表示让出线程标志，后面的方法会执行，如果是promise,则会将promise成功的结果放到回调方法中,如果不是promise对象，直接将结果返回给await
      const time3 = await step2(time1, time2)
      const result = await step3(time1, time2, time3)
      console.log(`result is ${result}`)
    }

    doIt() // 首先会调用这个方法
    // console.log('最后的同步标识')
    /**
     * await 使用场景 -- end
    */

    // ------------------------------------------
    /**
     * await在等待什么 -- start
    */
    // async function testSometing () {
    //   console.log('执行testSometing')
    //   return 'testSometing'
    // }

    // async function testAsync () {
    //   console.log('执行testAsync')
    //   return Promise.resolve('hello async')
    // }

    // async function test () {
    //   console.log('test start...')
    //   const v1 = await testSometing() // 关键点1
    //   console.log(v1)
    //   const v2 = await testAsync()
    //   console.log(v2)
    //   console.log(v1, v2)
    // }

    // test()

    // var promise = new Promise((resolve) => {
    //   console.log('promise start..')
    //   resolve('promise')
    // }) // 关键点2
    // promise.then((val) => console.log(val))

    // console.log('test end...')

    /**
    * await 在等待什么 -- end
    */

    // async function async2() {
    //   console.log( 'async2' )
    // }
    // console.log(async2())

    // async function getPromise () {
    //   await 11
    // }
    // console.log(getPromise())

    // async function async1 () {
    //   console.log('async1 start') // 第二步
    //   await async2() // 遇到了await，那我要看下await后面是不是返回一个promise
    //   console.log('async1 end')
    // }

    // async function async2 () {
    //   console.log('async2') // 于是来到了async2这个函数，看到function前面是async，那么说明是返回一个promise对象的，那我先打印consolelog，接着将promise成功时返回的结果放到回调队列中，排队等候被调用。
    // }

    // console.log('script start') // 第一步

    // setTimeout(function () {
    //   console.log('setTimeout')
    // }, 0)

    // async1()

    // new Promise(function (resolve) {
    //   console.log('promise1')
    //   resolve()
    // }).then(function () {
    //   console.log('promise2')
    // })

    // console.log('script end')

    /**
     * 练习练习练习
    */
    // function aaa () {
    //   console.log('aaa函数')
    //   return 'aaa'
    // }
    // async function getResult () { // 看到async知道是一个异步函数
    //   let res = await aaa()
    //   console.log(res)
    //   console.log('调用aaa函数之后')
    // }
    // console.log('方法外层的同步代码') // 这是第一步，因为是同步代码
    // getResult()
    // new Promise(function (resolve) {
    //   console.log('promise1')
    //   resolve()
    // }).then(function () {
    //   console.log('promise2')
    // })
    // console.log('zuibttom')

    /**
     * await对于非promise的处理
    */
    // function aaa () {
    //   console.log('aaa')
    //   // return Promise.resolve('aaa')
    // }
    // function bbb () {
    //   console.log('bbb')
    //   // return Promise.resolve('bbb')
    // }
    // function ccc () {
    //   console.log('ccc')
    //   // return Promise.resolve('ccc')
    // }
    // async function getAll () {
    //   await aaa()
    //   console.log('aaa-after')
    //   await bbb()
    //   console.log('bbb-after')
    //   await ccc()
    //   console.log('ccc-after')
    // }
    // getAll()
    // new Promise(function (resolve) {
    //   console.log('promise1')
    //   resolve()
    // }).then(function () {
    //   console.log('promise2')
    // })
    /**
     * 针对非promise的处理 -- end
    */
  }
}
// 不管await后面等的是什么，当遇到await的时候就是一个让出线程的标记，会将await后面的东西先执行一遍，之后会跳出async函数。
</script>
