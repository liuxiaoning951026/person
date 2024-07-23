<template>
  <div>
    <span style="border: 1px solid green">
      具名插槽009
    </span>
    <el-button size="small" type="primary" @click="clickText"
      >测试resolve</el-button
    >
    <el-button size="small" type="danger" @click="clickDanger"
      >测试resolve</el-button
    >
    <slot :user="user">
      {{ user.name }}
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
  name: "slot-experise",
  data() {
    return {
      user: {
        name: "liuning",
        age: "23"
      },
      header: "我是header222",
      main: "我是main222",
      footer: "我是footer222"
    };
  },
  methods: {
    // 点击方式001
    clickText() {
      const { href } = this.$router.resolve({
        name: "css3",
        params: { userId: 123 }
      });
      console.log(href); // 输出类似于 "/user-profile/123" 的URL字符串
      window.open(href, "_blank"); // 打开新的页面
    },

    // 点击方式002
    clickDanger() {
      // this.$router.push({
      //   name: "window-history-component"
      // });
      // window.open 都会是携带当前所有路由
      window.open("/window-history-component");
    }
  }
};
</script>
