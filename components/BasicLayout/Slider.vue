<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(item,idx) in images" :key="idx">
      <img class="w-full h-full" :src="item.image"/>
      <div class="content max-w-xl absolute top-[15%] bottom-5 left-[10%] mb-5 text-white drop-shadow-md flex flex-col gap-y-5 z-[150]">
        <h2 class="text-7xl font-bold text-left">{{ item.title }}</h2>
        <span class="font-bold text-justify">{{ item.overview }}</span>
        <div class="flex gap-2 flex-row flex-wrap">
          <a-button
            class="ant-btn primary-2 watch-primary-btn"
            danger
            shape="round"
          >
            Watch now
          </a-button>

          <a-button
            shape="round"
            class="ant-btn outline-2 watch-outline-btn"
          >
            Watch trailer
          </a-button>
        </div>
        <!--              <div class="image-container&#45;&#45;content__button">-->
        <!--                <a-button-->
        <!--                  class="ant-btn primary-2 watch-primary-btn"-->
        <!--                  danger-->
        <!--                  shape="round"-->
        <!--                >-->
        <!--                  Watch now-->
        <!--                </a-button>-->

        <!--                <a-button-->
        <!--                  shape="round"-->
        <!--                  class="ant-btn outline-2 watch-outline-btn"-->
        <!--                >-->
        <!--                  Watch trailer-->
        <!--                </a-button>-->
        <!--              </div>-->
      </div>

      <!--            <div class="image-container&#45;&#45;content">-->
      <!--              <h2 class="image-container&#45;&#45;content__title">{{ item.title }}</h2>-->
      <!--              <div class="image-container&#45;&#45;content__overview">{{ item.overview }}</div>-->
      <!--              <div class="image-container&#45;&#45;content__button">-->
      <!--                <a-button-->
      <!--                  class="ant-btn primary-2 watch-primary-btn"-->
      <!--                  danger-->
      <!--                  shape="round"-->
      <!--                >-->
      <!--                  Watch now-->
      <!--                </a-button>-->

      <!--                <a-button-->
      <!--                  shape="round"-->
      <!--                  class="ant-btn outline-2 watch-outline-btn"-->
      <!--                >-->
      <!--                  Watch trailer-->
      <!--                </a-button>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--            <div class="image-container&#45;&#45;poster rounded-3xl sm:overflow-hidden">-->
      <!--              <img src="https://www.themoviedb.org/t/p/original/lXthmT7NOhTJaugcodhdkXjyWZH.jpg" alt="" class="h-[480px] w-[360px] object-cover object-center" />-->
      <!--            </div>-->
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
  data(){
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 300000,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      },
      images: Array.from({length: 2}, (_, i) => {
        return {
          index: i,
          title: `My Hero Academia: World Heroes' Mission`,
          overview: `A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-class selected hero team. It’s up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academia.`,
          image: 'https://www.themoviedb.org/t/p/original/2RHjd10wqv57xYzZkNK8Sl09Ddt.jpg'
        }
      }),
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/main.scss";
@import "components/BasicLayout/style.scss";
</style>
