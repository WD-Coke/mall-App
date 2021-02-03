<template>
  <div class="tab-bar-item" @click="activeItem">
      <div class="icon" v-if="!isActive"><slot name="item-icon"></slot></div>
      <div class="active-icon" v-else><slot name="icon-active"></slot></div>
      <div class="text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    import TabBar from "./TabBar";
    export default {
        name: "TabBarItem",
      components: {TabBar},
      props:{
          path:{
            type: String,
            required:true
          },
          activeColor:{
            type:String,
            default:'#ff5777'
          }
        },
        data(){
          return{
          }
        },
      computed:{
          isActive(){
            return this.$route.path.indexOf(this.path) !==-1
          },
          activeStyle(){
            return this.isActive ? {'color':'#ff5777'} : {}
          }
      },
      methods:{
          activeItem(){
            this.$router.push(this.path)
          }
        }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .icon img,.active-icon img{
    height: 24px;
    width: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

  .text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
</style>
