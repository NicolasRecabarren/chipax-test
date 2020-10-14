<template>
  <div id="app">
    <NavBar />
    <Home />
  </div>
</template>

<script>
import Home from './pages/Home.vue';
import NavBar from './components/layout/NavBar.vue';

export default {
  name: 'App',
  components: {
    Home,
    NavBar
  }
}
</script>

<style>
body{
  background-color: #F5F6F8;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
