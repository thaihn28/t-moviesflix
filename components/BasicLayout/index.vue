<template>
  <a-layout class="layout-container relative">
    <a-layout-header id="header-id" class="flex fixed header w-full gap-4 items-center">
      <div class="inline-flex items-center justify-start flex-none" style="margin-left: 16px;">
        <BasicLayoutLogo/>
      </div>
      <div class="inline-flex items-center justify-end flex-auto" style="margin-top: 8px">
        <BasicLayoutSearch/>
      </div>

      <div class="inline-flex justify-end flex-auto" style="margin:8px 56px 0 0">
        <div class="text-xl font-bold text-white flex items-center justify-center md:gap-7 gap-4 z-[60]">
          <NuxtLink class="transition-all flex items-center" to="/movie/explore/series">Series</NuxtLink>
          <NuxtLink class="transition-all flex items-center" to="/movie/explore/tv-shows">TV Shows</NuxtLink>
          <div class="show-genres hover:text-[#DB0000] relative cursor-pointer transition-all flex items-center">
            Genres
            <div class="genres-list hidden transition-all h-auto bg-stone-800 w-72 bg-opacity-70">
              <NuxtLink v-for="item in categories" :key="item.id" :to="{ path: '/movie/explore/genres', query: { slug: item.slug }}"
                        class="hover:text-[#DB0000] w-auto text-base font-semibold mx-5 cursor-pointer text-white transition-all">
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>

          <div class="show-countries relative hover:text-[#DB0000] cursor-pointer transition-all flex items-center">
            Countries
            <div class="countries-list hidden transition-all absolute h-auto bg-stone-800 w-72 bg-opacity-70">
              <NuxtLink  v-for="item in countries" :key="item.id" :to="{ path: '/movie/explore/countries', query: { slug: item.slug }}"
                        class="hover:text-[#DB0000] w-auto text-base font-semibold mx-5 cursor-pointer text-white transition-all">
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="inline-flex justify-center items-start" style="margin-top: 8px">
        <UserAvatar/>
      </div>
    </a-layout-header>

    <a-layout-content class="layout-content">
      <slot/>
    </a-layout-content>

    <a-layout-footer v-if="!isAuthPage" class="footer">
      <div class="footer__content container">
        <div class="footer__content__logo">
          <div class="logo flex items-center justify-center">
            <nuxt-link to="/" class="text-xl mt-2 ml-2 font-bold" style="margin-left: 8px">
              T-Moviesflix
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
import UserAvatar from "@/components/BasicLayout/UserAvatar";
import BasicSlider from "@/components/SliderHeader/Slider";
import {mapGetters} from "vuex";

export default {
  name: "BasicLayout",
  components: {
    BasicLayoutSearch,
    BasicLayoutNavBar,
    BasicLayoutLogo,
    UserAvatar,
    BasicSlider,
  },
  data() {
    return {
      isShowGenres: false,
      isShowCountries: false
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  computed: {
    ...mapGetters({
      countries: 'country/getAllCountries',
      categories: 'category/getAllCates'
    }),
    isAuthPage() {
      const authPath = ['/login', '/sign-up']
      const currentPath = this.$route.path
      return authPath.includes(currentPath)
    },
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      const headerElement = document.getElementById('header-id')
      if (window.scrollY > 10)
        headerElement.classList.add('bg-color-header')
      else if (window.scrollY <= 10)
        headerElement.classList.remove('bg-color-header')
    },
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/main.scss";
@import "components/SliderHeader/style.scss";

.show-genres:hover .genres-list {
  position: absolute;
  display: flex;
  gap: 16px;
  row-gap: 32px;
  flex-wrap: wrap;
  top: 28px;
  right: -100px;
  z-index: 1000;
  justify-content: center;
  align-items: flex-start;
  padding: 1.25rem;
  border-radius: 8px;
}

.show-countries:hover .countries-list {
  position: absolute;
  display: flex;
  gap: 16px;
  row-gap: 32px;
  flex-wrap: wrap;
  top: 28px;
  right: -78px;
  z-index: 1000;
  justify-content: center;
  align-items: flex-start;
  padding: 1.25rem;
  border-radius: 8px;
}
</style>
