<template>
  <div class="top-movie-container">
    <h2 class="text-2xl font-bold text-white" style="margin-bottom: 16px">Hot movies</h2>
    <swiper class="swiper" :options="swiperOption" ref="mySwiper" @slideChange="changeSwiperIndex">
      <swiper-slide v-for="(item,idx) in slides" :key="idx" class="slide">
        <img class="w-[220px] h-[320px] rounded-2xl object-cover object-center" :src="item.image" alt="thumb">
        <div class="text-base font-semibold mt-2">My Hero Academia: World Heroes's Mission {{idx}}</div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      },
      swiperOptionv: {
        direction: 'vertical',
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination-v',
          clickable: true
        }
      },
      slides: Array.from({length: 10}, (_, i) => {
        return {
          title: `Slide ${i}`,
          image: "https://www.themoviedb.org/t/p/original/lXthmT7NOhTJaugcodhdkXjyWZH.jpg"
        }
      }),
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
  },
  methods: {
    changeSwiperIndex() {
      const isEndSlider = this.swiper.isEnd
      if(isEndSlider){
        /*TODO: when isEnd => call API */
        console.log("===swiper", this.swiper)
        console.log("===Call api")
      }
      return isEndSlider
    }
  }

}
</script>

<style lang="scss" scoped>
@import "style.scss";
.swiper {
  height: 420px;
  .swiper-slide {
    width: 15% !important;
  }
}


</style>
