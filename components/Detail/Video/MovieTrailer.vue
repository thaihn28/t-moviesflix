<template>
  <div class="relative w-full">
    <div class="trailer">
      <p class="trailer__title">Trailer</p>
      <iframe
        v-if="movie.trailerURL"
        width="100%"
        height="560"
        :src="movie.trailerURL"
        title="International Trailer" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="">
      </iframe>
      <div v-else class="flex md:flex-row md:gap-10 flex-col gap-5 justify-center items-center">
        <div class="max-w-[300px] ">
          <img src="~/assets/images/not-found.png" class="w-full object-cover rounded-lg mx-auto" alt="">
        </div>
        <span class=" md:text-[40px] text-xl md:leading-[45px]">
        Sorry, we couldn't find the trailer
      </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieTrailerComponent",
  props: {
    movie: {
      type: Object,
      required: true,
      default: () => undefined
    }
  },
}
</script>

<style lang="scss" scoped>
.trailer {
  @apply relative left-2/4 -translate-x-2/4 md:w-[1080px] w-auto;

  &__title {
    @apply text-3xl font-bold;
    margin-bottom: 16px;
  }
}
</style>
