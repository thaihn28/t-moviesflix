<template>
  <div>
    <TopMovie class="mb-4"/>
    <UpcomingMovie class="mb-4"/>
    <PopularTV class="mb-4"/>
  </div>
</template>

<script>
import TopMovie from "@/components/TopMovie";
import PopularTV from "@/components/PopularTV";
import UpcomingMovie from "@/components/UpcomingMovie";

export default {
  name: 'IndexPage',
  components: {
    TopMovie,
    PopularTV,
    UpcomingMovie
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

