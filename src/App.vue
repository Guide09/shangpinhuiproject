<template>
  <div id="app">
    <div>
      <Header></Header>
      <!-- 组件路由出口的地方 -->
      <router-view></router-view>
      <Footer v-show="$route.meta.show"></Footer>
    </div>
  </div>
</template>

<script>
// 引入
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
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
