<template>
  <div>
    <div class="banner" :style="`background-image: url(${img})`"></div>
    <div class="mb-16 grid grid-cols-10 mx-16 movie-content container">
      <div class="movie-content__poster col-span-2 col-start-4">
        <div class="movie-content__poster__img" :style="`background-image: url(${img2})`">
        </div>
      </div>
      <div class="movie-content__info col-start-6 col-span-8">
        <div class="title">Raya and the Last Dragon</div>
        <div>Generes</div>
        <div>Button</div>
        <p>Overview</p>
        <div>Cast</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PosterDetailComponent",
  data(){
    return{
      img: 'https://www.themoviedb.org/t/p/original/3emtmbHAp145frh3Pps1bZCCEHY.jpg',
      img2: 'https://www.themoviedb.org/t/p/original/eKqI962WWxtLo4WROaTuqzaXUbR.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
