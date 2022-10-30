<template>
  <div>
    <Slider/>
    <div class="m-16">
      <TopMovie class="mb-4"/>
      <UpcomingMovie class="mb-4"/>
      <PopularTV class="mb-4"/>
    </div>
  </div>
</template>

<script>
import TopMovie from "@/components/TopMovie";
import PopularTV from "@/components/PopularTV";
import UpcomingMovie from "@/components/UpcomingMovie";
import Slider from "@/components/SliderHeader/Slider";
import {scrollToTop} from "@/utils/app_utils";

export default {
  name: 'HomePage',
  components: {
    TopMovie,
    PopularTV,
    UpcomingMovie,
    Slider
  },
  data() {
    return {
    }
  },
  created() {
    scrollToTop()
  }
}
</script>

<style lang="scss" scoped>

</style>

