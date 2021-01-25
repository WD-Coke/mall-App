<template>
  <div class="main-tab-bar">
    <TabBar>
      <tab-bar-item>
        <img slot="item-icon" src="../../../assets/img/tabbar/home.svg">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="../../../assets/img/tabbar/category.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="../../../assets/img/tabbar/cart.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </TabBar>
  </div>
</template>

<script>
    import TabBar from "../../common/TabBar";
    import TabBarItem from "../../common/TabBarItem";
    export default {
        name: "MainTabBar",
      components: {TabBarItem, TabBar}
    }
</script>

<style scoped>
  .main-tab-bar img{

  }
</style>
