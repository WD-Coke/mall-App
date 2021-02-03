<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
          recommends:{
            type: Array,
            default: [],
          }
        },
      data(){
          return{
            i:1,
          }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .home-recommend{
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 14px;

    padding: 10px 0 15px ;
    border-bottom: 8px solid #eeeeee;
  }

  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 85%;
    margin-bottom: 8px;
  }
</style>
