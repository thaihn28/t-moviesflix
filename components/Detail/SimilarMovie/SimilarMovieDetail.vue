<template>
  <div class="relative w-full">
    <div class="similar-movies">
      <p class="similar-movies__title">Similar Movies</p>
      <CardSlider :movies="movies" :number-slides-per-view="5" :is-loop="false"/>
    </div>
  </div>
</template>

<script>
import CardSlider from "@/components/CardSlider/CardSlider";

export default {
  name: "SimilarMovieDetailComponent",
  components: {
    CardSlider
  },
  props: {
    movies: {
      type: Array,
      require: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.similar-movies {
  @apply relative left-2/4 -translate-x-2/4 md:w-[1080px] w-auto;

  &__title {
    @apply text-3xl font-bold;
    margin-bottom: 16px;
  }
}
</style>
