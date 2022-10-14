<template>
  <a-layout class="layout-container">
    <a-layout-header class="lg:flex header w-full items-center">
      <div class="inline-flex w-full items-center justify-start">
        <BasicLayoutLogo/>
      </div>
      <div class="inline-flex w-full lg:ml-8 items-center justify-end">
        <BasicLayoutSearch/>
      </div>
      <div class="inline-flex w-full justify-end">
        <BasicLayoutNavBar/>
      </div>
    </a-layout-header>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img class="w-full" src="https://static.topcv.vn/img/TOP%20CV%20T10%20(1)%20(1).png"/>
      </swiper-slide>
      <swiper-slide>
        <img class="w-full" src="https://static.topcv.vn/img/Banner%20cho%20TopCV-01.png"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <a-layout-content class="layout-content">
      <div class="flex flex-col">
        <slot/>
      </div>
    </a-layout-content>

    <a-layout-footer class="footer">
        <div class="footer__content container">
          <div class="footer__content__logo">
              <div class="logo flex items-center justify-center">
                <img class="w-10 h-10" src="~/assets/images/logo.png">
                <nuxt-link  to="/" class="text-2xl mt-2 ml-2 font-bold">
                  tMovies
                </nuxt-link>
            </div>
          </div>
          <div class="footer__content__menus">
            <div class="footer__content__menu">
              <NuxtLink to="/">Home</NuxtLink>
              <NuxtLink to="/">Contact us</NuxtLink>
              <NuxtLink to="/">Term of services</NuxtLink>
              <NuxtLink to="/">About us</NuxtLink>
            </div>
            <div class="footer__content__menu">
              <NuxtLink to="/">Live</NuxtLink>
              <NuxtLink to="/">FAQ</NuxtLink>
              <NuxtLink to="/">Premium</NuxtLink>
              <NuxtLink to="/">Privacy policy</NuxtLink>
            </div>
            <div class="footer__content__menu">
              <NuxtLink to="/">You must watch</NuxtLink>
              <NuxtLink to="/">Recent release</NuxtLink>
              <NuxtLink to="/">Top IMDB</NuxtLink>
            </div>
          </div>
        </div>
    </a-layout-footer>
  </a-layout>

</template>

<script>
import BasicLayoutSearch from "@/components/BasicLayout/Search";
import BasicLayoutNavBar from "@/components/BasicLayout/NavBar";
import BasicLayoutLogo from "@/components/BasicLayout/Logo";
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'


export default {
  // colorMode: 'dark',
  name: "BasicLayout",
  components: {
    BasicLayoutSearch,
    BasicLayoutNavBar,
    BasicLayoutLogo,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        // slidesPerView: 3,
        // spaceBetween: 30,
        // slidesPerGroup: 3,
        // loop: false,
        // loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/main";

.swiper {
  height: 480px;

  .swiper-slide {
    width: 100% !important;
    background-position: center;
    background-size: cover;

    &.slide-1 {
      background-image: url('https://v1.github.surmon.me/images/example/8.jpg')
    }

    &.slide-2 {
      background-image: url('https://v1.github.surmon.me/images/example/6.jpg')
    }

    &.slide-3 {
      background-image: url('https://v1.github.surmon.me/images/example/7.jpg')
    }

    &.slide-4 {
      background-image: url('https://v1.github.surmon.me/images/example/8.jpg')
    }

    &.slide-5 {
      background-image: url('https://v1.github.surmon.me/images/example/5.jpg')
    }
  }

  //swiper-slide swiper-slide-active
}
</style>
