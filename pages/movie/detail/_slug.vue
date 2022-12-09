<template>
  <div class="mb-16">
    <PosterDetail :movie="movie" :similar-movies="similarMovies"/>
  </div>
</template>

<script>
import PosterDetail from "@/components/Detail/PosterDetail";
import {scrollToTop} from "@/utils/app_utils";
import {mapGetters, mapMutations} from "vuex";

export default {
  middleware: 'authenticated',
  name: "MovieDetail",
  components: {
    PosterDetail
  },
  async fetch({store, params}) {
    await store.dispatch('movie/fetchingMovieDetail', params.slug)
    await store.commit('detail/setMovie', store.getters["movie/getMovieDetail"])
  },
  data() {
    return {
      loading: false,
      similarMovies: []
    }
  },
  computed: {
    ...mapGetters({
      movie: 'movie/getMovieDetail'
    }),
  },
  created() {
    this.fetchingSimilarMovies()
    scrollToTop()
  },
  methods: {
    async fetchingSimilarMovies() {
      try {
        const resource = 'api/v1/movies'
        const slugs = this.$store.getters['movie/getMovieDetail'].categories.map((item) => (item.slug)).toString()
        const res = await this.$axios.$get(`${resource}/filter-by-category?slug=` + slugs)
        const similarMovies = res.content
          .filter(item => (item.name !== this.movie.name))
        this.similarMovies = similarMovies
      } catch (e) {
        console.error(e.response.data)
      }
    }
  }
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
