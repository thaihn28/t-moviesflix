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
  middleware: ['auth'],
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
    this.getAllMovies()
    scrollToTop()
  },
  methods: {
    ...mapActions(
      {getAllMovies: 'movie/getAllMovies'}
    ),
    async test(){
      try {
        console.log('===login', this.$store.state.auth.user)
        const res = await this.$axios.get('/api/v1/users')
        console.log(res)
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

