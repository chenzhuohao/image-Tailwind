<template>
  <div id="app">
    <img alt="Vue logo" class="hidden" src="./assets/logo.png">
   <home></home>
  </div>
</template>

<script>
import home from './components/home.vue';

export default {
  name: 'App',
  components: {
   home
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {

}
</style>
