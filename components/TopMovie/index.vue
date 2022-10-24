<template>
  <div class="top-movie-container">
    <h2 class="text-xl font-bold text-white" style="margin-bottom: 16px">Hot movies</h2>
    <swiper class="swiper" :options="swiperOption" ref="mySwiper" @slideChange="changeSwiperIndex">
      <swiper-slide v-for="(item,idx) in slides" :key="idx" class="slide">
        <div class="cursor-pointer w-full h-[320px]  md:h-[400px] rounded-xl overflow-hidden p-3 relative select-none">
          <div class="z-50 relative w-full h-full flex flex-col gap-y-2 ">
            <div class="max-w-full h-[250px] md:h-[85%] rounded-xl">
              <img class="w-full h-full rounded-xl object-cover object-center" :src="item.image" alt="">
            </div>
            <span class="max-w-[80%] h-[30px] text-base truncate font-semibold mt-2">My Hero Academia: World Heroes's Mission {{idx}}</span>
          </div>
          <div class="absolute inset-0 p-3">
            <img class="w-full h-full object-cover rounded-xl hidden md:block" :src="item.image" alt="">
            <div class="layer absolute inset-0 md:backdrop-blur-md rounded-xl bg-[#000000] bg-opacity-40"></div>
          </div>
        </div>
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
        slidesPerView: 7,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
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
    width: 250px !important;
  }
}


</style>
