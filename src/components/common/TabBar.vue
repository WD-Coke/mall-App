<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    import TabBarItem from "./TabBarItem";
    export default {
        name: "TabBar",
        components:TabBarItem
    }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(150,150,150,.08);
  }
</style>
