<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <hello-world></hello-world> -->
    <!-- <first-component></first-component> -->
    <p class="router-style">
      <router-link to="/slot">Go to Foo</router-link>
      <router-link to="/slot-parents">slot-parents</router-link>
      <router-link to="/async-component">async-component</router-link>
      <router-link to="/watch-component">watch-component</router-link>
      <router-link to="/window-history-component">window-history-component</router-link>
      <router-link to="/zhengze">zhengze</router-link>
      <router-link to="/emit-on-comm">emit/on</router-link>
      <router-link to="/listeners-attrs">listeners-attrs</router-link>
      <router-link to="/sync-components">sync-components</router-link>
      <router-link to="/watch-deep">watch-deep</router-link>
      <router-link to="/css3">css3-animation</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
import helloWorld from './components/HelloWorld'
import firstComponent from './components/first-fcomponent.vue'

export default {
  name: 'App',
  components: {
    helloWorld,
    firstComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-style {
  float: left;
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
  border-bottom: none;
}
</style>
