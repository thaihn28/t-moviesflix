<template>
  <div class="top-movie-container">
    <h2 class="text-xl font-bold text-white" style="margin-bottom: 16px">{{title}}</h2>
    <CardSlider :movies="topMovies"/>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import CardSlider from "@/components/CardSlider/CardSlider";

export default {
  name: "TopMovieComponent",
  components: {
    Swiper,
    SwiperSlide,
    CardSlider
  },
  props: {
    title: {
      type: String,
      required: true,
      default: () => 'Hot Movies'
    },
    topMovies: {
      type: Array,
      default: () => []
    },
  }

}
</script>

<style lang="scss" scoped>
@import "style.scss";

</style>
