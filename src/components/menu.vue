<template>
  <div class="menu">
    <el-menu
      :default-active="onRoutes"
      @select="handleSelect"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">态势总览</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title"
            >分组一</template
          > -->
          <el-menu-item index="/watch-deep">选项1</el-menu-item>
          <el-menu-item index="/async-component">选项2</el-menu-item>
          <el-menu-item index="/watch-component">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title"
            >选项4</template
          >
          <el-menu-item index="/window-history-component">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/pdf-component">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="/css3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="/listeners-attrs">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-menu-item index="/component4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航5</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  computed: {
    onRoutes() {
      // console.log(this.$route);
      return this.$route.path; // 计算当前路由对应的菜单项
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key) {
      console.log(key);
      this.$router.push({
        path: key,
        params: { data: "query" }
      });
    }
  }
};
</script>
<style scoped>
.menu {
  width: 100%;
  height: 100%;
}
.el-menu {
  height: 100%;
}
</style>
