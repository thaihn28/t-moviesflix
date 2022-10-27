<template>
  <div class="mb-16">
    <PosterDetail/>
  </div>
</template>

<script>
import PosterDetail from "@/components/Detail/PosterDetail";

export default {
  name: "MovieDetail",
  components: {
    PosterDetail
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
