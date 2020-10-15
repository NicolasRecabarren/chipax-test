<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <Home />
    </div>
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

<style lang="scss">
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
    > .container{
      z-index: 10;
      position: relative;
      .box-shadow{
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 5px;
      }
    }
  }
</style>
