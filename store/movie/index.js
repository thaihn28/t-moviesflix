export const state = () => ({
  movies: []
})

export const mutations = {
  SET_MOVIES(state, movies){
    state.movies = movies
  }
}

export const actions = {
  async nuxtServerInit({commit}){
    try {
      const res = await this.$repositories.movie.all()
      console.log(res, '===data')
      commit('movie/SET_MOVIES', res.data)
    }catch (e) {
      // this.$notification.error({
      //   message: e.response.data,
      //   placement: 'topRight',
      //   duration: 2
      // })
      console.log(e)
  }
  }
}

export const getters = {
  getAllMovies(state){
    return state.movies
  }
}
