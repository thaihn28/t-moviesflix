<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(item,idx) in slideMovies" :key="idx">
      <img class="w-full h-full object-cover object-center" :src="item.posterURL"/>
      <div
        class="content w-full h-full absolute top-0 mb-5 text-white items-center justify-center drop-shadow-md flex flex-row gap-y-5 gap-x-32">
        <div class="max-w-2xl gap-y-8 h-full flex items-center justify-center flex-col">
          <div class="w-full text-7xl font-bold text-left">{{ item.name }}</div>
          <span class="font-bold text-justify">{{ item.content }}</span>
          <div class="w-full gap-2 flex-row flex-wrap">
            <a-button
              :loading="loading"
              class="ant-btn primary-2 watch-primary-btn"
              danger
              shape="round"
              @click="watchNow(item.slug)"
            >
              Watch now
            </a-button>
            <a-button
              :loading="loading"
              shape="round"
              class="ant-btn outline-2 watch-outline-btn"
              @click="watchMovieTrailer(item)"
            >
              Watch trailer
            </a-button>
          </div>
        </div>
        <img :src="item.thumbURL" alt=""
             class="rounded-3xl h-[480px] w-[360px] object-cover object-center"/>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper";

export default {
  name: "BasicSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slideMovies: {
      type: Array,
      required: true,
      default: () => []
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        },
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      },
      loading: false,
    }
  },
  methods: {
    watchMovieTrailer(movie){
      this.loading = true
      this.$emit('watch-trailer', movie)
      this.loading = false
    },
    watchNow(slug){
      this.loading = true
      this.$router.push(`/movie/detail/${slug}`)
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "style.scss";
@import "assets/css/main.scss";

</style>
