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
import { mapActions } from 'vuex'

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
  },
  methods: {
    ...mapActions(
      {getAllMovies: 'movie/nuxtServerInit'}
    ),
    async test(){
      try {
        // console.log('===login', this.$store.state.auth.user)
        // const res = await this.$axios.get('/v1/users')
        // console.log(res)
      }catch (e) {
        this.$notification.error({
          message: e.response.data,
          placement: 'topRight',
          duration: 5
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

