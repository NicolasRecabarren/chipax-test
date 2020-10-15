<template>
  <div id="app">
    <div class="background-overlay"></div>
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
    /*background-color: #F5F6F8;*/
    /*background-image: url(/img/background-rickandmorty.jpg);*/
    background-image: url(/img/background-image.jpg);
    background-size: cover;
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
    }
    > .background-overlay{
      position: fixed;
      background-color: #FFF;
      opacity: 0.75;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
</style>
