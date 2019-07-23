<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <hello-world></hello-world> -->
    <first-component></first-component>
    <!-- <router-view/> -->
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
</style>
