<template>
  <div>
    <div class="banner" :style="`background-image: url(${img})`"></div>
    <div class="mb-16 mx-16 movie-content container">
      <div class="movie-content__poster">
        <div class="movie-content__poster__img" :style="`background-image: url(${img2})`"></div>
      </div>
      <div class="movie-content__info">
        <div class="title">Raya and the Last Dragon</div>
        <div class="btn-action flex gap-x-[16px]">
          <a-button class="ant-btn outline-2 font-semibold" size="large">Add To Favorite</a-button>
          <a-button class="ant-btn primary-2 font-semibold" size="large" type="primary" danger @click="watchMovie()">Watch Movie Now
          </a-button>
        </div>
        <p class="mx-4 text-base">
          Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil
          force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same
          evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the
          fractured land and its divided people.
        </p>
        <div class="cate">
          <span class="cate__item" @click="viewMoviesByCate()">Genres 1</span>
        </div>
      </div>
    </div>
    <div class="container movie-footer-detail">
      <ActorList :actor-images="actorImages"/>
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
  data() {
    return {
      img: 'https://www.themoviedb.org/t/p/original/3emtmbHAp145frh3Pps1bZCCEHY.jpg',
      img2: 'https://www.themoviedb.org/t/p/original/eKqI962WWxtLo4WROaTuqzaXUbR.jpg',
      actorImages: Array.from({length: 5}, (_, i) => {
        return {
          index: i,
          name: `Name ${i}`,
          image: 'https://image.tmdb.org/t/p/w500//19VV7frhrcSZqfszhCMlNztKfPZ.jpg'
        }
      }),
      movie: {
        id: 1,
        trailer_url: 'https://www.youtube.com/embed/3UFWsEY8Hdc'
      }
    }
  },
  methods: {
    watchMovie(){
      const movieID = this.$route.params.id
      this.$router.push(`/movie/watching/${movieID}`)
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
