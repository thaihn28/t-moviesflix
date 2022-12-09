<template>
  <div>
    <div class="banner" :style="`background-image: url(${movie.posterURL})`"></div>
    <div class="mb-16 mx-16 movie-content container">
      <div class="movie-content__poster">
        <div class="movie-content__poster__img" :style="`background-image: url(${movie.thumbURL})`"></div>
      </div>
      <div class="movie-content__info">
        <div class="title">{{ movie.name }}</div>
        <div v-if="!movie.isPremium" class="btn-action flex gap-x-[16px]">
          <a-button :loading="loading" class="ant-btn outline-2 font-semibold" size="large" @click="addToFavorite">Add To Favorite</a-button>
          <a-button class="ant-btn primary-2 font-semibold" size="large" type="primary" danger @click="watchMovie">Watch
            Movie Now
          </a-button>
        </div>
        <div v-else class="btn-action flex gap-x-[16px]">
          <a-button :loading="loading" class="ant-btn primary-2 font-semibold" size="large" @click.prevent="handleUnlockMovie">Unlock Movie Now</a-button>
        </div>
        <p class="mx-4 text-base">
          {{ movie.content }}
        </p>
        <div class="cate">
          <span v-for="item in movie.categories" :key="item.id" class="cate__item"
                @click="viewMoviesByCate(item.slug)">{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div class="container movie-footer-detail">
      <ActorList :actor-images="movie.actors"/>
      <MovieTrailer :movie="movie"/>
      <SimilarMovieDetail :movies="similarMovies"/>
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
    },
    similarMovies: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    watchMovie() {
      const slug = this.$route.params.slug
      this.$router.push(`/movie/watching/${slug}`)
    },
    addToFavorite(){
      this.$notification.success({
        message: 'Coming soon!',
        duration: 3,
        placement: 'topRight'
      })
    },
    viewMoviesByCate(slug) {
      this.$router.push({ path: '/movie/explore/genres', query: { slug: slug } })
    },
    async handleUnlockMovie() {
      this.loading = true
      try {
        const res = await this.$axios.$post(`/pay?slug=${this.movie.slug}`)
        if (res)
          for (const item of res.links) {
            if (item.rel === 'approval_url' && process.client)
              window.open(item.href)
          }
      }catch (e) {
        this.$notification.error({
          message: 'Error: Please try again later',
          duration: 2,
          placement: 'topRight'
        })
      }
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "style.scss";
@import "assets/css/main.scss";
</style>
