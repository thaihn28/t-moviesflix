export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('movie/fetchingAllMovies')
    await dispatch('movie/fetchingHotMovies')
    await dispatch('movie/fetchingUpcomingMovies')
    await dispatch('actor/fetchingActors')
    await dispatch('category/fetchingCategories')
    await dispatch('country/fetchingCountries')
  }
}
