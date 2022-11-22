<template>
  <div class="relative w-full">
    <div class="trailer">
      <p class="trailer__title">Trailer</p>
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

  &__title{
    @apply text-3xl font-bold;
    margin-bottom: 16px;
  }
}
</style>
