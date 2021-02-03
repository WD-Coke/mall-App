<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div> </NavBar>
    <scroll class="content">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view/>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentTab].list"></goods-list>
    </scroll>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>

    </ul>

  </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import HomeSwiper from "./childcomponets/HomeSwiper";
    import HomeRecommend from "./childcomponets/HomeRecommend";

    import {getHomeMultidata,getHomeData} from "../../network/home";
    import FeatureView from "./childcomponets/FeatureView";
    import TabControl from "../../components/content/tabControl/TabControl";
    import GoodsList from "../../components/content/goodslist/GoodsList";
    import Scroll from "../../components/common/scroll/Scroll";

    export default {
        name: "Home",
        components: {
          Scroll,
          GoodsList,
          TabControl,
          FeatureView,
          HomeRecommend,
          HomeSwiper,
          NavBar
        },
      data(){
          return{
            banners: [],
            recommends: [],
            goods:{
              'pop':{page: 1,list:[]},
              'new':{page: 1,list:[]},
              'sell':{page: 1,list:[]},
            },
            currentTab:'pop'
          }
      },
      created() {
          this.getMultiData()
          this.getHomeData('pop')
          this.getHomeData('new')
          this.getHomeData('sell')
      },
      methods:{
        //数据相关方法
        tabClick(index){
          switch (index) {
            case 0:
              this.currentTab='pop'
                  break
            case 1:
              this.currentTab='new'
                  break
            case 2:
              this.currentTab='sell'
          }
        },

        //网络请求方法
        getMultiData() {
          getHomeMultidata().then(res => {
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
            // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
          })
        },
        //商品数据
        getHomeData(type){
          getHomeData(type,this.goods[type].page).then(res=>{
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page +=1
          })
        }
      }
    }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    font-weight: 700;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
