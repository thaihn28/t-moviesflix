<template>
  <a-tabs :size="'large'" @change="changeTab">
    <a-tab-pane key="series" tab="Series"></a-tab-pane>
    <a-tab-pane key="tv-shows" tab="TV Shows" force-render></a-tab-pane>
    <a-tab-pane key="categories" tab="Categories"></a-tab-pane>
    <a-tab-pane key="countries" tab="Countries"></a-tab-pane>
  </a-tabs>
</template>

<script>
import {scrollToTop} from "@/utils/app_utils";

export default {
  name: "BasicLayoutNavBar",
  methods: {
    changeTab(key){
      this.$router.push(`/movie/explore/${key}`)
    }
  },
  created() {
    scrollToTop()
  }
}
</script>

