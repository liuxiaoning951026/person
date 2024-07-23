<template>
  <div class="home">
    <div class="left-com">
      <Menu></Menu>
    </div>
    <div class="right-com">
      <router-view />
    </div>
  </div>
</template>
<script>
import Menu from "@/components/menu";
export default {
  name: "home",
  components: { Menu },
  data() {
    return {};
  }
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
}
.left-com {
  width: 15%;
  height: 100%;
  border: 1px solid rgb(255, 132, 0);
}
.right-com {
  flex: 1;
  height: 100%;
  border: 1px solid rgb(0, 255, 13);
}
</style>
