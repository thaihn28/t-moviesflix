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
// import { mapActions } from 'vuex'

export default {
  middleware: 'authenticated',
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
  computed: {
  },
  created() {
    this.test()
    scrollToTop()
    // this.$store.dispatch('movie/nuxtServerInit')
  },
  methods: {
    // ...mapActions(
    //   { fetchAllMovie: 'movie/nuxtServerInit' }
    // ),
    async test(){
      try {
        const res = await this.$repositories.movieRepo.all()
        console.log(res, '===data')
      }catch (e) {
        // this.$notification.error({
        //   message: 'Login failed! Please check your username/password again',
        //   placement: 'topRight',
        //   duration: 5
        // })
      }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

