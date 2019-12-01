<template>
  <div>
    <!-- 匿名插槽 -->
    <!-- <div>
      <slot></slot>
    </div> -->
    <!-- <div>
      <p>下面的这是一个匿名插槽</p>
      <slot></slot>
    </div>
    <div style="borde: 1px solid red">
      <slot></slot>
      <slot></slot>
    </div> -->

    <!-- 具名插槽 -->
    <div style="border: 1px solid red;">
      <slot name="name" v-if="$scopedSlots.name" :msg="msg">
      </slot>
      <div style="background: red; width: 100px; height: 100px" v-else>

      </div>
    </div>
    <!-- <div>
      <p>这是一个具名插槽</p>
      <slot name="a">
      </slot>
    </div> -->

    <!-- 作用域插槽/数据插槽 -->
    <!-- <div>
      <slot name="msg" :msg="msg">
      </slot>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'slot',
  data () {
    return {
      data: ['red', 'yellow', 'green'],
      msg: 'nihao!'
    }
  }
}
</script>
