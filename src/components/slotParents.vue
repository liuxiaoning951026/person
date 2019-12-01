<template>
  <div>
    <!-- 普通具名插槽的使用 子级使用<slot name="名称"></slot> ;父级使用 slot="名称" -->
    <!-- <slot-component>
      <span slot="default">
       我是父级组件中的header
      </span>
      <span slot="main">
        我是父级组件中的main
      </span>
      <span slot="footer">
        我是父级组件中的footer
      </span>
    </slot-component> -->

    <slot-component>
      <template v-slot="{user}">
        {{user.age}}
      </template>
      <template #header="{header}">
        我是父级组件中的header:
        {{header}}44
      </template>
      <template v-slot:main=" slotProps ">
        {{ slotProps.main }}
      </template>
      <!-- 具名插槽中如果没有定义name, 那么在 -->
      <template v-slot:footer="slotProps">
        {{ slotProps }}
      </template>
    </slot-component>
    <!-- <h3>aaa{{msg}}</h3> -->
    <!-- <h3>我是msg</h3> -->
    <slot-Com1>
      <!-- <div>
        <p>自定义插槽内容自定义插槽内容自定义插槽内容</p>
      </div> -->
      <!-- <slot name="a"></slot> -->
      <!-- <div slot="a">
        <p>我是具名插槽中的内容</p>
      </div> -->
      <!-- <div style="border: 1px solid blue" slot="a" slot-scope="msg">
        {{msg}}
         <p style="border: 1px solid red">我是具名插槽并且还是作用域插槽的内容</p>
      </div> -->
      <!-- <slot-component>
      <template v-slot="{user}">
        {{user.age}}
      </template>
      <template #header="{header}">
        我是父级组件中的header:
        {{header}}
      </template>
      <template v-slot:main=" slotProps ">
        {{ slotProps.main }}
      </template>
      <template v-slot:footer="slotProps">
        {{ slotProps }}
      </template>
    </slot-component> -->
      <!-- <template  #msg="{msg}">
        {{msg}}
      </div> -->
      <!-- <template v-slot:msg="msg">
        {{msg}}
      </template> -->
      <!-- <template v-slot>
        <p>这是匿名插槽</p>
      </template> -->
        <template slot="name" slot-scope="msg">
          <p style="fontSize: 30px">我是具名插槽{{msg}}</p>
        </template>
    </slot-Com1>
  </div>
</template>
<script>
import bus from '../bus/bus.js'
import slotComponent from './slotExprise.vue'
import slotCom1 from './slot.vue'
export default {
  name: 'slot-parents',
  components: { slotComponent, slotCom1 },
  watch: {
    msg: function (newVal) {
      console.log('newVal===', newVal)
    }
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    let self = this
    bus.$on('data', function (val) {
      self.msg = val
    })
    console.log(self)
  }
}
</script>
