const resource = 'api/v1/movies'

export const state = () => ({
  movies: [],
  movie: {}
})

export const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies
  },
  SET_MOVIE(state, movie){
    state.movie = movie
  }
}

export const actions = {
  async fetchingMovies({commit}) {
    try {
      const res = await this.$axios.$get(resource)
      commit('SET_MOVIES', res.content)
    } catch (e) {
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
  getAllMovies(state) {
    return state.movies
  },
  getMovieDetail(state) {
    return state.movie
  }
}
