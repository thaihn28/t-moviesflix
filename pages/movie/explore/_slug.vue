<template>
  <a-loading :loading="true">
  <div class="mx-0 md:mx-16 mb-16 mt-32 flex flex-col items-center">
    <div class="w-full h-auto gap-3 md:gap-7 justify-center flex flex-row flex-wrap">
      <div v-for="item in cards" :key="item" class="md:w-[250px] w-[48%] flex-shrink-0">
        <div
          class="max-w-[200px] md:max-w-full h-auto rounded-xl overflow-hidden p-3 relative select-none md:hover:scale-110 transition-all cursor-pointer">
          <div class="z-50 relative w-full h-full flex flex-col gap-y-2 overflow-hidden">
            <div class="max-w-full h-[300px] rounded-xl">
              <img class="w-full h-full object-cover rounded-xl"
                   src="https://image.tmdb.org/t/p/w500//spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="">
            </div>
            <span class="truncate text-lg font-medium max-w-[80%] h-[30px] mt-2">Movie Name</span>
            <div class="flex flex-row justify-between text-sm absolute z-30 gap-1 top-0 left-0 w-full md:p-2">
              <span
                class="drop-shadow-lg bg-[#DB0000] p-2 rounded-lg md:px-4 md:py-2 font-normal text-white bg-opacity-70">
                2022
              </span>
            </div>
            <a-button class="ant-btn h-9 primary-2 text-lg font-medium" type="primary" danger>Watch Now</a-button>
          </div>
          <div class="absolute inset-0 p-3">
            <img class="w-full h-full object-cover rounded-xl"
                 src="https://image.tmdb.org/t/p/w500//spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="">
            <div class="layer absolute inset-0 backdrop-blur-md rounded-xl bg-[#000000] bg-opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 justify-center">
      <Pagination/>
    </div>
  </div>
  </a-loading>
</template>

<script>
import {scrollToTop} from "@/utils/app_utils";
import Pagination from "@/components/Pagination";

export default {
  name: "ExploreMovie",
  components: {
    Pagination
  },
  data() {
    return {
      cards: Array.from({length: 10}, (_, i) => (i)),
    }
  },
  created() {
    scrollToTop()

  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
