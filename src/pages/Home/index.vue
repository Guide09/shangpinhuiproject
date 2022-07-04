<template>
  <div>
    <TypeNav/>
    <ListCotainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import ListCotainer from "./ListCotainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
export default {
  name: "",
  components: {
    ListCotainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
};
</script>

<style>
</style>