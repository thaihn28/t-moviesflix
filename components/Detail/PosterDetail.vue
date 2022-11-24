<template>
  <div>
    <div class="banner" :style="`background-image: url(${movie.posterURL})`"></div>
    <div class="mb-16 mx-16 movie-content container">
      <div class="movie-content__poster">
        <div class="movie-content__poster__img" :style="`background-image: url(${movie.thumbURL})`"></div>
      </div>
      <div class="movie-content__info">
        <div class="title">{{movie.name}}</div>
        <div class="btn-action flex gap-x-[16px]">
          <a-button class="ant-btn outline-2 font-semibold" size="large">Add To Favorite</a-button>
          <a-button class="ant-btn primary-2 font-semibold" size="large" type="primary" danger @click="watchMovie">Watch Movie Now
          </a-button>
        </div>
        <p class="mx-4 text-base">
          {{movie.content}}
        </p>
        <div class="cate">
          <span v-for="item in movie.categories" :key="item.id" class="cate__item" @click="viewMoviesByCate()">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="container movie-footer-detail">
      <ActorList :actor-images="movie.actors"/>
      <MovieTrailer :movie="movie"/>
      <SimilarMovieDetail/>
    </div>
  </div>
</template>

<script>
import ActorList from "@/components/Detail/Actor/ActorList";
import MovieTrailer from "@/components/Detail/Video/MovieTrailer";
import SimilarMovieDetail from "@/components/Detail/SimilarMovie/SimilarMovieDetail";

export default {
  name: "PosterDetailComponent",
  components: {
    ActorList,
    MovieTrailer,
    SimilarMovieDetail
  },
  props: {
    movie: {
      type: Object,
      required: true,
      default: () => undefined
    }
  },
  data() {
    return {

    }
  },
  methods: {
    watchMovie(){
      const slug = this.$route.params.slug
      this.$router.push(`/movie/watching/${slug}`)
    },
    viewMoviesByCate(){
      this.$router.push(`/movie/category/${this.movie.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "style.scss";
@import "assets/css/main.scss";
</style>
