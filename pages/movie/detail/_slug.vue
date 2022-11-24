<template>
  <div class="mb-16">
    <PosterDetail :movie="movie"/>
  </div>
</template>

<script>
import PosterDetail from "@/components/Detail/PosterDetail";
import {scrollToTop} from "@/utils/app_utils";
import {mapGetters, mapMutations } from "vuex";

export default {
  name: "MovieDetail",
  components: {
    PosterDetail
  },
  async fetch ({ store, params }) {
    await store.dispatch('movie/fetchingMovieDetail', params.slug)
  },
  data(){
    return{
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      movie: 'movie/getMovieDetail'
    }),
  },
  created() {
    scrollToTop()
    if(process.client){
      const movieObj = JSON.stringify(this.movie)
      localStorage.setItem('movie', movieObj)
    }
  },
}
</script>

<style lang="scss" scoped>
//::v-deep .layout-content {
//
//  & .container {
//    max-width: 0 !important;
//  }
//}
</style>
