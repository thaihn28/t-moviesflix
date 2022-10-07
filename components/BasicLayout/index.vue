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

export default {
  // colorMode: 'dark',
  name: "BasicLayout",
  components: {
    BasicLayoutSearch,
    BasicLayoutNavBar,
    BasicLayoutLogo
  }
}
</script>

<style lang="scss">
@import "assets/css/main";
</style>
