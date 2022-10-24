<template>
  <div>
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
::v-deep layout-content{
  margin: 0;
}
</style>
