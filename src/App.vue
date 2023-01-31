<template>
  <div>
    <Header></Header>

    <!-- 路由组件出口的地方 -->
    <router-view></router-view>

    <!-- 在Home、Search显示的，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 引入
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
export default {
  name:'',
  data() {
    return {
      msg:'abc'
    }
  },
  components:{
    Header,
    Footer
  },
  mounted(){
    // 通知Vuex发请求，获取数据，存储于仓库当中
    this.$store.dispatch('categoryList');
  }
}
</script>

<style>

</style>