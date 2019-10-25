<template>
  <div>

  </div>
</template>
<script>
export default {
  name: 'zhengze',
  data () {
    return {

    }
  },
  methods: {
    testReg () {
      // 正则表达式的原理就是匹配（匹配分为字符匹配和位置匹配）
      // let res = /hello/ // 正常使用方式
      // console.log(res.test('h'))
      // 横向模糊查询
      // let k = /ab{2,4}c/g
      // let str = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
      // console.log(str.match(k))
      //  纵向模糊查询
      // let res = /a[[123]b/g
      // let str = 'a0b a1b a2b a3b a4b'
      // console.log(str.match(res))

      // 匹配16进制颜色值
      // 要求匹配#ffbbad、#Fc01DF、#FFF、#ffF
      // let res = /#[0-9a-zA-Z]{6}|#[0-9a-zA-Z]{3}/g
      // let res = /#[0-9a-zA-Z]{3,6}/g
      // let str = '#ffbbad #Fc01DF #FFF #ffE'
      // console.log(str.match(res))

      // 匹配时间
      // 要求匹配 23:59、02:07
      // 思路：共为四位数字
      // let res = /[0-9]{2}:[0-9]{2}/g
      // let res = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/
      // console.log(res.test('23:59'))
      // // res.lastIndex = 0
      // console.log(res.test('02:07'))

      // 匹配日期
      // 比如yyyy-mm-dd格式为例
      // 要求匹配
      // let res = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
      // console.log(res.test('2018-06-10'))

      // window操作系统文件路径
      // 要求匹配F:\study\javascript\regex\cccc
      // 文件夹文件名不能包含一些特殊字符  [^\\:*<>|"?\r\n/]
      // 1、匹配前缀 F:/     [a-zA-Z]:\\
      // 2、匹配文件名称\     （^\\:*<>|"?\r\n/）
      // 3、匹配文件名称可以不加\ (^\\:*<>|"\r\n/)
      // let res = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/
      // console.log(res.test('F:\\study\\javascript\\regex\\regular expression.pdf'))

      // 匹配id
      // let string = '<div id="container" class="main"></div>'
      // // let res = /id=".*"/
      // let res = /id="[^"]*"/ // 表示除了双引号之外的任意字符
      // console.log(string.match(res)) // 。表示匹配任意字符

      // 匹配用户名 4-16位（字母数字下划线减号都可以）
      // let res = /^[\w/-]{4, 16}$/
      // console.log(res.test('wew22eee34dd3fgf'))

      // 匹配密码强度 （最少六位，包括至少1个大写字母，一个小写字母，一个数字，一个特殊字符）
      // `      let res = /^([a-zA-Z0-9]+){6,}$/
      //       console.log(res.test('iFat3#'))`
    }
  },
  created () {
    this.testReg()
  }
}
</script>
