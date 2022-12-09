<template>
  <div class="relative">
    <div v-show="isShowTrailer" class="trailer-container absolute z-50 w-full h-full">
      <div class="trailer">
        <div class="flex justify-between">
          <p class="trailer__title">Trailer</p>
          <p class="flex text-2xl cursor-pointer" @click="hideMovieTrailer">
            Close
            <icon-close class="mt-1 ml-0.5"/>
          </p>
        </div>
        <iframe
          width="100%"
          height="560"
          :src="movie.trailerURL"
          title="International Trailer" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="">
        </iframe>
      </div>
    </div>
    <Slider :slide-movies="movies.content" @watch-trailer="showMovieTrailer"/>
    <div class="m-16">
      <TopMovie :title="'Hot Movies'" :top-movies="hotMovies" class="mb-4"/>
      <UpcomingMovie :title="'Upcoming Movies'" :upcoming-movies="upcomingMovies" class="mb-4"/>
      <PopularTV :title="'Actors'" :actors="actors" class="mb-4"/>
    </div>
  </div>
</template>

<script>
import TopMovie from "@/components/TopMovie";
import PopularTV from "@/components/PopularTV";
import UpcomingMovie from "@/components/UpcomingMovie";
import Slider from "@/components/SliderHeader/Slider";
import {scrollToTop} from "@/utils/app_utils";
import {mapGetters} from 'vuex'
import iconClose from "assets/images/icons/iconClose";

export default {
  name: 'HomePage',
  components: {
    TopMovie,
    PopularTV,
    UpcomingMovie,
    Slider,
    iconClose
  },
  data() {
    return {
      isShowTrailer: false,
      movie: {},
    }
  },
  computed: {
    ...mapGetters(
      {
        movies: 'movie/getMovies',
        hotMovies: 'movie/getHotMovies',
        upcomingMovies: 'movie/getUpcomingMovies',
        actors: 'actor/getAllActors'
      },
    ),
  },
  created() {
    scrollToTop()
  },
  methods: {
    hideMovieTrailer() {
      this.isShowTrailer = false
    },
    showMovieTrailer(data) {
      if (data)
        this.movie = data
        this.isShowTrailer = true
    }
  }
}
</script>

<style lang="scss" scoped>
.trailer-container {
  background: rgba(0, 0, 0, 0.8);
}

.trailer {
  @apply relative left-2/4 top-48 -translate-x-2/4 md:w-[1080px] w-auto;

  &__title {
    @apply text-3xl font-bold;
    margin-bottom: 16px;
  }
}
</style>

