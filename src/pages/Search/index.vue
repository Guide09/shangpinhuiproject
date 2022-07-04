<template>
  <div>
    <p>params参数{{ $route.params.keyword }}</p>
    <p>query参数{{ $route.query.k }}</p>
    <p>{{ keyword }}</p>
  </div>
</template>

<script>
export default {
  name: "",
  // 路由组件可以传递props参数
  props: ["keyword"],
};
</script>


<style lang="less">
</style>