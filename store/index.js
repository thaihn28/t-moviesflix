const pagination = {
  pageNo: 0,
  pageSize: 5
}

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('movie/fetchingAllMovies', pagination)
    await dispatch('movie/fetchingHotMovies')
    await dispatch('movie/fetchingUpcomingMovies')
    await dispatch('actor/fetchingActors')
    await dispatch('category/fetchingCategories')
    await dispatch('country/fetchingCountries')
  }
}
