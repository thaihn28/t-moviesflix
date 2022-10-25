<template>
  <div>
    <div class="banner" :style="`background-image: url(${img})`"></div>
    <div class="mb-16 mx-16 movie-content">
      <div class="movie-content__poster">
        <div class="movie-content__poster__img" :style="`background-image: url(${img2})`">
        </div>
      </div>
      <div class="movie-content__info">
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
