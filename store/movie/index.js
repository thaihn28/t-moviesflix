const resource = 'api/v1/movies'

export const state = () => ({
  movies: [],
  hotMovies: [],
  upcomingMovies: [],
  movie: {}
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
  }
}

export const actions = {
  async fetchingAllMovies({commit}) {
    try {
      const res = await this.$axios.$get(resource)
      commit('SET_MOVIES', res.content)
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
      const res = await this.$axios.$get(resource + '/filter-by-type?type=upcoming')
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
  }
}
