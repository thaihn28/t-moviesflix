<template>
  <div class="mx-16 mb-16 mt-32">
    <div class="grid grid-cols-4 gap-10 container">
      <div class="col-span-3 col-start-1 flex flex-col  flex-grow text-white">
        <div class="relative flex w-full h-[560px] flex-shrink-0">
          <iframe :src="movie?.episodes[0]?.linkEmbed || 'https://2embed.org/embed/movie?imdb=1'"
                  class="relative w-full h-full top-0 left-0" frameborder="0" allowfullscreen=""></iframe>
        </div>
        <div class="flex flex-col flex-shrink-0 mt-5 gap-3">
          <div class="text-white md:text-[30px] text-[35px] font-semibold ">{{movie.name}}</div>
          <div class="flex flex-row gap-4">
              <span class="flex flex-row gap-x-[4px]">
                <icon-star class="mt-0.5"/>
                <span class="text-base">7.8</span>
              </span>
            <span class="flex flex-row gap-x-[4px]">
                <icon-calendar class="mt-0.5 mr-0.5"/>
                <span>{{movie.year}}</span>
              </span>
          </div>
          <div class="flex-nowrap gap-2">
            <span class="md:text-xl text-2xl mb-2 font-semibold">Overview</span>
            <p class="text-gray-400 md:text-md text-xl">
              {{movie.content}}
            </p>
          </div>
        </div>
      </div>
      <div class="vertical-scroll text-white md:w-[352px] w-full flex-shrink-0 rounded-lg md:flex-col">
        <span class="text-2xl font-bold">Recommends</span>
        <div class="w-full my-5 flex justify-between flex-row flex-shrink-0 gap-2 cursor-pointer" @click="viewOtherMovie()">
          <div class="md:w-[100px] md:h-[150px] w-[170px] h-[250px] overflow-hidden rounded-lg flex-shrink-0">
            <img src="https://image.tmdb.org/t/p/w500/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg" alt="No image" class="w-full h-full object-contain object-center">
          </div>
          <div class="flex flex-col flex-grow gap-3 justify-center p-3 truncate">
            <span class="md:text-xl text-2xl flex-grow-0 max-w-full truncate">Movie Name</span>
            <span class="text-gray-400 mb-6 md:text-md text-lg">2006-07-06</span>
            <span class="flex flex-row items-center md:py-0 py-1 border rounded-2xl w-fit px-4 text-sm">
                <span class="md:text-md text-xl">Actor</span>
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
  name: "WatchingMovie",
  components: {
    iconStar,
    iconCalendar,
  },
  data(){
    return{
      loading: false,
    }
  },
  computed: {
    movie(){
      if(process.client)
        console.log('===vao day')
        return JSON.parse(localStorage.getItem('movie'))
    }
  },
  created() {
    scrollToTop()
  },
  destroyed() {
    localStorage.removeItem('movie')
  },
  methods: {
    viewOtherMovie(){
      this.$router.push('/movie/watching/1')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
