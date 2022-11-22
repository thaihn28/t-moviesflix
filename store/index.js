export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('movie/fetchingMovies')
    await dispatch('actor/fetchingActors')
  }
}
