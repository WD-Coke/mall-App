<template>
    <div class="goods-list">
      <GoodsListItem v-for="item in goods" :goods-item="item"/>
    </div>
</template>

<script>
    import GoodsListItem from "./GoodsListItem";
    export default {
        name: "GoodsList",
        components: {
          GoodsListItem
        },
        props:{
          goods:{
            type:Array,
            default() {
              return [];
            }
          }
        }
    }
</script>

<style scoped>
  .goods-list{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2px;
  }
</style>
