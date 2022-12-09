export const state = () => ({
  movie: {}
})

export const mutations = {
  setMovie(state, user){
    state.movie = user
  },
  removeMovie(state, value){
    state.movie = value
  }
}

export const getters = {
  getMovie(state){
    return state.movie
  }
}
