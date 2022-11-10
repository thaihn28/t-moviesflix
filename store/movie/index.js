export const state = () => ({
  movies: []
})

export const mutations = {
  setMovies(state, movies){
    state.movies = movies
  }
}

export const actions = {
  async getAllMovies({commit}){
    console.log(commit)
  }
}
