<template>
  <a-spin size="large" :spinning="loading">
    <a-layout class="layout-container relative">
      <a-layout-header id="header-id" class="flex fixed header w-full gap-4 items-center">
        <div class="inline-flex items-center justify-start flex-none" style="margin-left: 16px; margin-top: 8px">
          <BasicLayoutLogo/>
        </div>
        <div class="inline-flex items-center justify-end flex-auto" style="margin-top: 8px">
          <BasicLayoutSearch/>
        </div>
        <div class="inline-flex justify-end flex-auto" style="margin-top: 8px">
          <div class="text-xl font-bold text-white flex items-center justify-center md:gap-7 gap-4 z-[60]">
            <a class=" hover:text-primary transition-all flex items-center" href="/">Series</a>
            <a class=" hover:text-primary transition-all flex items-center" href="/explore&amp;page=1">TV Shows</a>
            <div class=" hover:text-primary transition-all flex items-center">Genres</div>
            <button class="hover:text-primary transition-all">Countries</button>
          </div>
        </div>
        <div class="inline-flex justify-center items-start" style="margin-top: 8px">
          <UserAvatar/>
        </div>
      </a-layout-header>
      <!--      <div v-show="isShowGenres" class="z-[1000] flex flex-wrap gap-4 gap-y-8 justify-center items-start transition-all absolute right-[100px]-->
      <!--          h-auto bg-stone-800 w-44 right-[180px] top-14 bg-opacity-70" style="padding: 1.25rem">-->
      <!--        <div class="hover:text-[#DB0000] w-auto text-base font-semibold mx-5 cursor-pointer text-white transition-all">-->
      <!--          Actions-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div v-show="isShowCountries" class="z-[1000] flex flex-wrap gap-4 gap-y-8 justify-center items-start transition-all absolute right-[100px]-->
      <!--          h-auto bg-stone-800 w-44 right-[50px] top-14 bg-opacity-70" style="padding: 1.25rem">-->
      <!--        <div class="hover:text-[#DB0000] w-auto text-base font-semibold mx-5 cursor-pointer text-white transition-all">-->
      <!--          Vietnamese-->
      <!--        </div>-->
      <!--        <div class="hover:text-[#DB0000] w-auto text-base font-semibold mx-5 cursor-pointer text-white transition-all">-->
      <!--          Vietnamese-->
      <!--        </div>-->
      <!--      </div>-->
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
  </a-spin>

</template>

<script>
import BasicLayoutSearch from "@/components/BasicLayout/Search";
import BasicLayoutNavBar from "@/components/BasicLayout/NavBar";
import BasicLayoutLogo from "@/components/BasicLayout/Logo";
import UserAvatar from "@/components/BasicLayout/UserAvatar";
import BasicSlider from "@/components/SliderHeader/Slider";

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
      loading: false,
      isShowGenres: false,
      isShowCountries: false
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
    this.loading = true
  },
  computed: {
    isAuthPage() {
      const authPath = ['/login', '/sign-up']
      const currentPath = this.$route.path
      return authPath.includes(currentPath)
    },
    // getErrorStatusCode() {
    //   const error = this.$store.getters['error/getError']
    //   return error?.statusCode !== 404
    // }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  watch: {
    loading() {
      setTimeout(() => {
        this.loading = false
      }, 1500)
    }
  },
  methods: {
    handleScroll() {
      const headerElement = document.getElementById('header-id')
      if (!this.loading)
        if (window.scrollY > 10)
          headerElement.classList.add('bg-color-header')
        else if (window.scrollY <= 10)
          headerElement.classList.remove('bg-color-header')
    },
    changeTab(key) {
      this.isShowGenres = key === 'categories' || false
      this.isShowCountries = key === 'countries' || false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/main.scss";
@import "components/SliderHeader/style.scss";

::v-deep .genres-list:after {
  content: "";
  display: block;
  height: 20px;
  left: 0;
  position: absolute;
  top: -20px;
  width: 100%;
}
</style>
