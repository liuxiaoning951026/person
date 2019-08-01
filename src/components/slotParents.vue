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
        我是父级组件中的header
        {{header}}
      </template>
      <template v-slot:main=" slotProps ">
        {{ slotProps.main }}
      </template>
      <!-- 具名插槽中如果没有定义name, 那么在 -->
      <template v-slot:footer="slotProps">
        {{ slotProps }}
      </template>
    </slot-component>
  </div>
</template>
<script>
import slotComponent from './slotExprise.vue'
export default {
  name: 'slot-parents',
  components: { slotComponent }
}
</script>
