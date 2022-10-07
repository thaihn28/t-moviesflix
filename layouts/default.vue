<template>
  <div class="app">
  <BasicLayout>
    <nuxt />
  </BasicLayout>
  </div>
</template>

<script>
import BasicLayout from "@/components/BasicLayout";
export default {
  name: "DefaultLayout",
  components: {BasicLayout}
}
</script>

<style lang="scss">
  @import "assets/css/main";
</style>
