const resource = '/api/v1/countries'

export const state = () => ({
  countries: []
})

export const mutations = {
  SET_COUNTRIES(state, countries){
    state.countries = countries
  }
}

export const actions = {
  async fetchingCountries({commit}){
    try {
      const res = await this.$axios.$get(resource)
      commit('SET_COUNTRIES', res)
    }catch (e) {
      console.error(e.response.data)
    }
  }
}

export const getters = {
  getAllCountries(state){
    return state.countries
  }
}
