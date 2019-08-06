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
      return 11
    },
    check () {
      this.getAsync().then((data) => {
        console.log(data) // 11
      })
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

    // function takeLongTime (n) {
    //   return new Promise(resolve => {
    //     setTimeout(() => resolve(n + 200), n)
    //   })
    // }
    // function step1 (n) {
    //   console.log(`step1 with ${n}`)
    //   return takeLongTime(n)
    // }
    // function step2 (m, n) {
    //   console.log(`step2 with ${m} and ${n}`)
    //   return takeLongTime(m + n)
    // }
    // function step3 (k, m, n) {
    //   console.log(`step3 with ${k}, ${m} and ${n}`)
    //   return takeLongTime(k + m + n)
    // }

    // async function doIt () {
    //   const time1 = 300
    //   const time2 = await step1(time1)
    //   const time3 = await step2(time1, time2)
    //   const result = await step3(time1, time2, time3)
    //   console.log(`result is ${result}`)
    // }

    // doIt()
    // function testSometing () {
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

    // async function async2() {
    //   console.log( 'async2' )
    // }
    // console.log(async2())

    // async function getPromise () {
    //   await 11
    // }
    // console.log(getPromise())

    async function async1 () {
      console.log('async1 start') // 第二步
      await async2() // 遇到了await，那我要看下await后面是不是返回一个promise
      console.log('async1 end')
    }

    async function async2 () {
      console.log('async2') // 于是来到了async2这个函数，看到function前面是async，那么说明是返回一个promise对象的，那我先打印consolelog，接着将promise成功时返回的结果放到回调队列中，排队等候被调用。
    }

    console.log('script start') // 第一步

    setTimeout(function () {
      console.log('setTimeout')
    }, 0)

    async1()

    new Promise(function (resolve) {
      console.log('promise1')
      resolve()
    }).then(function () {
      console.log('promise2')
    })

    console.log('script end')
  }
}
</script>
