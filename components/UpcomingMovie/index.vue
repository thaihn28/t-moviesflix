<template>
  <div>
    <h2 class="text-xl font-bold text-white" style="margin-bottom: 16px">{{title}}</h2>
    <swiper class="swiper" :options="swiperOption" ref="mySwiper" @slideChange="changeSwiperIndex">
      <swiper-slide v-for="(item,idx) in upcomingMovies" :key="idx" class="slide">
        <div class="cursor-pointer w-full h-[320px]  md:h-[400px] rounded-xl overflow-hidden p-3 relative select-none">
          <div class="card-wrapper z-50 relative w-full h-full flex flex-col gap-y-2 ">
            <div class="card-movie max-w-full h-[250px] md:h-[85%] rounded-xl">
              <img class="w-full h-full rounded-xl object-cover object-center" :src="item.thumbURL" alt="">
              <div class="card-info">
                <a-button v-if="!isPremium" class="flex action-button" @click="redirectToDetail(item.id)">
                  <span class="mr-[4px] mt-[2px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-eye" viewBox="0 0 16 16">
                    <path
                      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path
                      d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                  </svg>
                  </span>
                  <span class="font-medium">Watch</span>
                </a-button>
                <a-button v-else @click="handleUnlockMovie" class="flex action-button">
                  <span class="mr-[4px] mt-[2px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-lock" viewBox="0 0 16 16">
                      <path
                        d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                    </svg>
                  </span>
                  <span class="font-medium">Unlock</span>
                </a-button>
              </div>
            </div>
            <span class="card-title max-w-full h-[30px] text-base truncate font-semibold mt-2">{{item.name}}</span>
          </div>
          <div class="absolute inset-0 p-3">
            <img class="w-full h-full object-cover rounded-xl hidden md:block" :src="item.thumbURL" alt="">
            <div class="layer absolute inset-0 md:backdrop-blur-md rounded-xl bg-[#000000] bg-opacity-40"></div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "UpcomingMovieTV",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    title: {
      type: String,
      default: () => 'Upcoming Movies',
      required: true
    },
    upcomingMovies: {
      type: Array,
      required: true,
      default: () => []
    }
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
      // slides: Array.from({length: 10}, (_, i) => {
      //   return {
      //     title: `Slide ${i}`,
      //     image: "https://www.themoviedb.org/t/p/original/bGkLsmAjfgZTFv0WZGwqwbmYZvF.jpg"
      //   }
      // }),
      isPremium: false
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  methods: {
    changeSwiperIndex() {
      const isEndSlider = this.swiper.isEnd
      if (isEndSlider) {
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
@import "components/card-movie.scss";

.swiper {
  height: 430px;

  .swiper-slide {
    width: 250px !important;
  }
}




</style>
