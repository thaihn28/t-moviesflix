<template>
  <a-spin size="large" :spinning="loading">
    <a-layout class="layout-container">
      <a-layout-header id="header-id" ref="layoutHeader" class="grid grid-cols-12 fixed header w-full items-center">
        <div class="inline-flex col-span-4 items-center justify-start" style="margin-left: 16px">
          <BasicLayoutLogo/>
        </div>
        <div class="items-center col-span-3">
          <BasicLayoutSearch/>
        </div>
        <div class="inline-flex 2xl:col-span-4 justify-end col-span-4" style="margin-top: 8px">
          <BasicLayoutNavBar/>
        </div>
        <div class="h-full inline-flex justify-center items-start col-span-1" style="margin:8px 0 16px 16px">
          <UserAvatar/>
        </div>
      </a-layout-header>
      <div v-if="getErrorStatusCode !== 404">
        <BasicSlider/>
      </div>
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
import BasicSlider from "@/components/BasicLayout/Slider";

export default {
  name: "BasicLayout",
  components: {
    BasicLayoutSearch,
    BasicLayoutNavBar,
    BasicLayoutLogo,
    UserAvatar,

    BasicSlider
  },
  data() {
    return {
      loading: false,
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
    this.loading = true
  },
  computed: {
    getErrorStatusCode() {
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/main.scss";
@import "components/BasicLayout/style.scss";
</style>
