<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <div id="placeholder"></div>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/mainTabbar/MainTabBar";
  export default {
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  #placeholder{
    width: 100%;
    height: 49px;
  }
</style>
