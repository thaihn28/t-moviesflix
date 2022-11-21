<template>
<!--  <a-spin :loading="loading">-->
  <div class="mb-16">
    <PosterDetail/>
  </div>
<!--  </a-spin>-->
</template>

<script>
import PosterDetail from "@/components/Detail/PosterDetail";
import {scrollToTop} from "@/utils/app_utils";

export default {
  name: "MovieDetail",
  components: {
    PosterDetail
  },
  data(){
    return{
      loading: false
    }
  },
  created() {
    scrollToTop()
  }
}
</script>

<style lang="scss" scoped>
//::v-deep .layout-content {
//
//  & .container {
//    max-width: 0 !important;
//  }
//}
</style>
