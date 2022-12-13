<template>
  <div class="mx-16 mb-16 mt-32">
    <div class="grid grid-cols-4 gap-10 container">
      <div class="col-span-3 col-start-1 flex flex-col  flex-grow text-white">
        <div class="relative flex w-full h-[560px] flex-shrink-0">
          <iframe :src="linkEmbed"
                  class="relative w-full h-full top-0 left-0" frameborder="0" allowfullscreen=""></iframe>
        </div>
        <div class="flex flex-col flex-shrink-0 mt-5 gap-3">
          <div class="text-white md:text-[30px] text-[35px] font-semibold ">{{ movie?.name }}</div>
          <div class="flex flex-row gap-4">
              <span class="flex flex-row gap-x-[4px]">
                <icon-star class="mt-0.5"/>
                <span class="text-base">7.8</span>
              </span>
            <span class="flex flex-row gap-x-[4px]">
                <icon-calendar class="mt-0.5 mr-0.5"/>
                <span>{{ movie?.year }}</span>
              </span>
          </div>
          <div class="flex-nowrap gap-2">
            <span class="md:text-xl text-2xl mb-2 font-semibold">Overview</span>
            <p class="text-gray-400 md:text-md text-xl">
              {{ movie?.content }}
            </p>
          </div>
        </div>
      </div>
      <div class="vertical-scroll text-white md:w-[352px] w-full flex-shrink-0 rounded-lg md:flex-col">
        <span class="text-2xl font-bold">Recommends</span>
        <div v-for="item in recommendMovies" :key="item.id" class="w-full my-5 flex justify-between flex-row flex-shrink-0 gap-2 cursor-pointer"
             @click="viewOtherMovie(item.slug)">
          <div class="md:w-[100px] md:h-[150px] w-[170px] h-[250px] overflow-hidden rounded-lg flex-shrink-0">
            <img :src="item.thumbURL" alt="No image"
                 class="w-full h-full object-contain object-center">
          </div>
          <div class="flex flex-col flex-grow gap-3 justify-center p-3 truncate">
            <span class="md:text-xl text-2xl flex-grow-0 max-w-full truncate">{{ item.name }}</span>
            <span class="text-gray-400 mb-2 md:text-md text-lg">{{ item.year }}</span>
            <span class="flex flex-row items-center md:py-0 py-1 border rounded-2xl w-fit px-4 text-sm">
                <span class="md:text-base text-lg">{{ item.type }}</span>
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconStar from "assets/images/icons/iconStar";
import iconCalendar from "assets/images/icons/iconCalendar";
import {scrollToTop} from "@/utils/app_utils";

export default {
  validate({store}) {
    const movie = store.getters['detail/getMovie']
    return Object.keys(movie).length !== 0
  },
  middleware: 'authenticated',
  name: "WatchingMovie",
  components: {
    iconStar,
    iconCalendar,
  },
  data() {
    return {
      loading: false,
      movie: {},
      linkEmbed: ''
    }
  },
  computed: {
    recommendMovies(){
      const movies = this.$store.getters['movie/getHotMovies']
        .filter(item => (item.name !== this.movie.name))
      return movies
    }
  },
  created() {
    scrollToTop()
    this.checkExistMovieData()
  },
  methods: {
    checkExistMovieData(){
      const stateMovie = this.$store.getters["detail/getMovie"]
      if (stateMovie.slug === this.$route.params.slug) {
        this.movie = stateMovie
        this.linkEmbed = stateMovie?.episodes[0]?.linkEmbed || 'https://2embed.org/embed/movie?imdb=1'
      } else
        this.$router.push('/error')
    },
    viewOtherMovie(slug) {
      this.$router.push(`/movie/detail/${slug}`)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
