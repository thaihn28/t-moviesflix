<template>
    <div class="mx-0 md:mx-16 mb-16 mt-32 flex flex-col items-center">
      <a-skeleton v-if="$fetchState.pending" :loading="true" :paragraph="{ rows: 8 }" :active="true">
      </a-skeleton>
      <p class="text-center text-2xl font-bold text-white" v-else-if="$fetchState.error">Oops! Error while fetching movies...</p>
      <div v-else class="text-center">
        <div class="w-full h-auto gap-3 md:gap-7 justify-center flex flex-row flex-wrap">
          <div v-for="item in movies" :key="item.id" class="md:w-[250px] w-[48%] flex-shrink-0">
            <div
              class="max-w-[200px] md:max-w-full h-auto rounded-xl overflow-hidden p-3 relative select-none md:hover:scale-110 transition-all cursor-pointer">
              <div class="z-50 relative w-full h-full flex flex-col gap-y-2 overflow-hidden">
                <div class="max-w-full h-[300px] rounded-xl">
                  <img class="w-full h-full object-cover rounded-xl"
                       :src="item.thumbURL" alt="No image">
                </div>
                <span class="truncate text-lg font-medium max-w-[80%] h-[30px] mt-2">{{ item.name }}</span>
                <div class="flex flex-row justify-between text-sm absolute z-30 gap-1 top-0 left-0 w-full md:p-2">
              <span
                class="drop-shadow-lg bg-[#DB0000] p-2 rounded-lg md:px-4 md:py-2 font-normal text-white bg-opacity-70">
                {{ item.year }}
              </span>
                </div>
                <a-button class="ant-btn h-9 primary-2 text-lg font-medium" type="primary" danger @click="watchMovieDetail(item.slug)">Watch Now</a-button>
              </div>
              <div class="absolute inset-0 p-3">
                <img class="w-full h-full object-cover rounded-xl"
                     :src="item.thumbURL" alt="No image">
                <div class="layer absolute inset-0 backdrop-blur-md rounded-xl bg-[#000000] bg-opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16">
          <Pagination :paginationProp="pagination" @change-page="changePage" @change-page-size="changePageSize"/>
        </div>
      </div>
    </div>
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
      routeParams: this.$route.params,
      pagination: {
        totalPage: 0,
        totalElements: 0,
        pageNo: 0,
        pageSize: 15
      },
    }
  },
  async fetch() {
    let payload = {
      slug: this.$route.query.slug,
      pageNo: this.pagination.pageNo,
      pageSize: this.pagination.pageSize
    }
    switch (this.routeParams.slug){
      case 'more':
        await this.$store.dispatch('movie/fetchingAllMovies', payload)
        break
      case 'tv-shows':
        await this.$store.dispatch('movie/fetchingTvShows', payload)
        break
      case 'genres':
        await this.$store.dispatch('movie/fetchingSimilarMovies', payload)
        break
      // case 'countries':
      //   await this.$notification.success({
      //     message: "Coming soon!",
      //     duration: 2,
      //     placement: 'topRight'
      //   })
      //   break
      case 'actors':
        await this.$store.dispatch('movie/fetchingMoviesByActor', payload)
        break
      default:
        break
    }
  },
  watch: {
    '$route.query': '$fetch'
  },
  computed: {
    movies() {
      //Using Object literal instead of using switch-case
      const cases = {
        'more': this.$store.getters['movie/getMovies'],
        'tv-shows': this.$store.getters['movie/getTvShows'],
        'genres': this.$store.getters['movie/getSimilarMovies'],
        'actors': this.$store.getters['movie/getMoviesByActor'],
      }
      const res = cases[this.routeParams.slug]
      if (Object.keys(res).length) {
        this.pagination = {
          totalPage: res.totalPages,
          totalElements: res.totalElements,
          pageNo: res.page,
          pageSize: res.size
        }
        return res.content
      }
    }
  },
  created() {
    scrollToTop()
  },
  methods: {
    watchMovieDetail(slug){
      this.$router.push(`/movie/detail/${slug}`)
    },
    changePage(data){
      if(data)
        this.pagination = { ...data }
        this.$fetch()
    },
    changePageSize(pageSize){
      if(pageSize)
        this.pagination.pageSize = pageSize
        this.$fetch()
    }
  }
}
</script>
