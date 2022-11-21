<template>
<!--  <a-spin :loading="loading">-->
  <div class="mx-16 mb-16 mt-32">
    <div class="grid grid-cols-4 gap-10 container">
      <div class="col-span-3 col-start-1 flex flex-col  flex-grow text-white">
        <div class="relative flex w-full h-[560px] flex-shrink-0">
          <iframe src="https://www.2embed.to/embed/tmdb/movie?id=664469"
                  class="relative w-full h-full top-0 left-0" frameborder="0" allowfullscreen=""></iframe>
        </div>
        <div class="flex flex-col flex-shrink-0 mt-5 gap-3">
          <div class="text-white md:text-[30px] text-[35px] font-semibold ">Movie Name</div>
          <div class="flex flex-row gap-4">
              <span class="flex flex-row gap-x-[4px]">
                <icon-star class="mt-0.5"/>
                <span class="text-bas">5.9</span>
              </span>
            <span class="flex flex-row gap-x-[4px]">
                <icon-calendar class="mt-0.5 mr-0.5"/>
                <span>2022</span>
              </span>
          </div>
          <div class="flex-nowrap gap-2">
            <span class="md:text-xl text-2xl mb-2 font-semibold">Overview</span>
            <p class="text-gray-400 md:text-md text-xl">
              In the 1930s, three friends—a doctor, a nurse, and an attorney—witness a murder, become suspects
              themselves
              and uncover one of the most outrageous plots in North American history.
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
                <span class="md:text-md text-xl">7.3</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="md:h-4 md:w-4 h-6 w-6 ml-2 " fill="currentColor" viewBox="0 0 24 24" stroke-width="0"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
<!--  </a-spin>-->
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
      loading: false
    }
  },
  created() {
    scrollToTop()

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
