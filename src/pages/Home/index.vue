<template>
  <div>
    <TypeNav />
    <ListCotainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :floor="floor"/>
    <Brand />
  </div>
</template>

<script>
import ListCotainer from "./ListCotainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapState } from "vuex";
export default {
  name: "",
  components: {
    ListCotainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
    mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: { 
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style>
</style>