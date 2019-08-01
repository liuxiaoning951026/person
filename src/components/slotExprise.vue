<template>
  <div>
    <span >
      具名插槽
    </span>
    <slot :user="user">
      {{user.name}}
    </slot>
    <header>
      <slot name="header" :header="header">
        我是子header111
      </slot>
    </header>
    <main>
      <slot name="main" :main="main">
        我是子main111
      </slot>
    </main>
    <footer>
      <slot name="footer" :footer="footer">
        我是子footer111
      </slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'slot-experise',
  data () {
    return {
      user: {
        name: 'liuning',
        age: '23'
      },
      header: '我是header222',
      main: '我是main222',
      footer: '我是footer222'
    }
  }
}
</script>
