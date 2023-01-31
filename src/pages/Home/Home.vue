<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要再引入 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor,index) in floorList.data" :key="floor.id" :list="floor"/>
    <Brand/>

  </div>
</template>

<script>
  // 引入其余组件
import ListContainer from '@/pages/Home/ListContainer/ListContainer.vue';
import TypeNav from '@/components/TypeNav/TypeNav.vue';
import Recommend from '@/pages/Home/Recommend/Recommend.vue'
import Rank from '@/pages/Home/Rank/Rank.vue'
import Like from '@/pages/Home/Like/Like.vue'
import Floor from '@/pages/Home/Floor/Floor.vue'
import Brand from '@/pages/Home/Brand/Brand.vue'
import {mapState} from 'vuex'

export default {
    name: "home",
    components: { 
      TypeNav,
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand 
    },
    mounted() {
      // 派发action，获取floor组件的数据
      this.$store.dispatch('getFloorList')
    },
    computed:{
      ...mapState({
        floorList: state=>state.home.floorList
      })
    }
}
</script>

<style>

</style>