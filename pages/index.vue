<template>
  <a-layout class="layout-container">
    <a-layout-header class="lg:flex header items-center">
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

  </a-layout>
</template>

<script>
import BasicLayoutSearch from "~/components/BasicLayout/Search";
import BasicLayoutLogo from "~/components/BasicLayout/Logo";
import BasicLayoutNavBar from "~/components/BasicLayout/NavBar";
export default {
  name: 'IndexPage',
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
