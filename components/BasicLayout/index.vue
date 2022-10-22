<template>
  <a-spin size="large" :spinning="loading">
  <a-layout class="layout-container">
    <a-layout-header id="header-id" class="lg:flex fixed header w-full items-center">
      <div class="inline-flex items-center w-full justify-start">
        <BasicLayoutLogo/>
      </div>
      <div class="inline-flex items-center" style="margin-right: 32px">
        <BasicLayoutSearch/>
      </div>
      <div class="inline-flex">
        <BasicLayoutNavBar/>
      </div>
      <div class="inline-flex h-full" style="margin:0 16px 16px 16px">
        <UserAvatar/>
      </div>
    </a-layout-header>
      <swiper v-if="getErrorStatusCode !== 404" class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item,idx) in images" :key="idx">
          <div class="image-container">
            <div class="image-container--content">
              <h2 class="image-container--content__title">{{ item.title }}</h2>
              <div class="image-container--content__overview">{{ item.overview }}</div>
              <div class="image-container--content__button">
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
            </div>
            <div class="image-container--poster rounded-3xl sm:overflow-hidden">
              <img src="https://www.themoviedb.org/t/p/original/lXthmT7NOhTJaugcodhdkXjyWZH.jpg" :alt="'Test'" class="h-[480px] w-[360px] object-cover object-center" />
            </div>
            <img class="w-full h-full" :src="item.image"/>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    <a-layout-content class="layout-content">
      <div class="flex flex-col mt-10">
        <slot/>
      </div>
    </a-layout-content>

    <a-layout-footer class="footer">
      <div class="footer__content container">
        <div class="footer__content__logo">
          <div class="logo flex items-center justify-center">
            <img class="w-10 h-10" src="~/assets/images/logo.png">
            <nuxt-link to="/" class="text-2xl mt-2 ml-2 font-bold" style="margin-left: 8px">
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
  </a-spin>

</template>

<script>
import BasicLayoutSearch from "@/components/BasicLayout/Search";
import BasicLayoutNavBar from "@/components/BasicLayout/NavBar";
import BasicLayoutLogo from "@/components/BasicLayout/Logo";
import UserAvatar from "@/components/BasicLayout/UserAvatar";
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

export default {
  name: "BasicLayout",
  components: {
    BasicLayoutSearch,
    BasicLayoutNavBar,
    BasicLayoutLogo,
    UserAvatar,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        // autoplay: {
        //   delay: 2000,
        //   disableOnInteraction: false
        // },
        // loop: true,
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
      loading: false
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
    this.loading = true
  },
  computed: {
    getErrorStatusCode(){
      const error = this.$store.getters['error/getError']
      return error?.statusCode
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  watch: {
    loading(){
      setTimeout(() => {
        this.loading = false
      }, 1500)
    }
  },
  methods: {
    handleScroll() {
      const headerElement = document.getElementById('header-id')
      if(!this.loading)
        if (window.scrollY > 10)
          headerElement.classList.add('bg-color-header')
        else if (window.scrollY <= 10)
          headerElement.classList.remove('bg-color-header')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/main.scss";
@import "components/BasicLayout/style.scss";
</style>
