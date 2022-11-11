export const state = () => ({
  movies: []
})

export const mutations = {
  setMovies(state, movies){
    state.movies = movies
  }
}

export const actions = {
  nuxtServerInit(vueContext, context){
    console.log(vueContext, '===vue context')
    console.log(context, '===context')
  }
}
