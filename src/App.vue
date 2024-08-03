<template>
  <div id="app">
    <RealTimeAutobotCount />
    <router-view></router-view>
  </div>
</template>

<script>
import RealTimeAutobotCount from './components/RealTimeAutobotCount.vue';

export default {
  name: 'App',
  components: {
    RealTimeAutobotCount,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
