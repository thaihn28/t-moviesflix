const resource = 'api/v1/movies'
const filterBy = '/filter-by-type?type='

export const state = () => ({
  movies: [],
  hotMovies: [],
  upcomingMovies: [],
  movie: {},
  similarMovies: [],
  tvShows: {},
  moviesByActor: {}
})

export const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies
  },
  SET_HOT_MOVIES(state, movies) {
    state.hotMovies = movies
  },
  SET_UP_COMING_MOVIES(state, movies){
    state.upcomingMovies = movies
  },
  SET_MOVIE(state, movie){
    state.movie = movie
  },
  SET_SIMILAR_MOVIES(state, movies){
    state.similarMovies = movies
  },
  SET_TV_SHOWS(state, tvShows){
    state.tvShows = tvShows
  },
  SET_MOVIES_BY_ACTOR(state, movies){
    state.moviesByActor = movies
  }
}

export const actions = {
  async fetchingAllMovies({commit}, payload) {
    try {
      const res = await this.$axios.$get(resource + `?pageNo=${payload.pageNo}&pageSize=${payload.pageSize}`)
      commit('SET_MOVIES', res)
    } catch (e) {
      console.error(e.response.data)
    }
  },
  async fetchingHotMovies({commit}) {
    try {
      const res = await this.$axios.$get(resource + '/filter-by-hot')
      commit('SET_HOT_MOVIES', res.content)
    } catch (e) {
      console.error(e.response.data)
    }
  },
  async fetchingUpcomingMovies({commit}){
    try {
      const res = await this.$axios.$get(resource + filterBy + 'upcoming')
      commit('SET_UP_COMING_MOVIES', res.content)
    }catch (e) {
      console.error(e.response.data)
    }
  },
  async fetchingMovieDetail({commit}, slug) {
    try {
      const res = await this.$axios.$get(`${resource}/${slug}`)
      commit('SET_MOVIE', res)
    }
    catch (e) {
      console.error(e.response.data)
    }
  },
  async fetchingSimilarMovies({commit}, payload){
    try {
      const res = await this.$axios.$get(`${resource}/filter-by-category?slug=` + payload.slug + `&pageNo=${payload.pageNo}&pageSize=${payload.pageSize}`)
      commit('SET_SIMILAR_MOVIES', res)
    }catch (e) {
      console.error(e.response.data)
    }
  },
  async fetchingTvShows({commit}, payload){
    try {
      const res = await this.$axios.$get(resource + filterBy + 'tv' + `&pageNo=${payload.pageNo}&pageSize=${payload.pageSize}`)
      commit('SET_TV_SHOWS', res)
    }catch (e) {
      console.error(e.response.data)
    }
  },
  async fetchingMoviesByActor({commit}, payload){
    try {
      const res = await this.$axios.$get(`${resource}/filter-by-actor/${payload.slug}` + `?pageNo=${payload.pageNo}&pageSize=${payload.pageSize}`)
      commit('SET_MOVIES_BY_ACTOR', res)
    }catch (e) {
      console.error(e.response.data)
    }
  }
}

export const getters = {
  getMovies(state) {
    return state.movies
  },
  getHotMovies(state) {
    return state.hotMovies
  },
  getUpcomingMovies(state){
    return state.upcomingMovies
  },
  getMovieDetail(state) {
    return state.movie
  },
  getSimilarMovies(state){
    return state.similarMovies
  },
  getTvShows(state){
    return state.tvShows
  },
  getMoviesByActor(state){
    return state.moviesByActor
  }
}
