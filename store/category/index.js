const resource = 'api/v1/categories'

export const state = () => ({
  categories: []
})

export const mutations = {
  SET_CATEGORIES(state, categories){
    state.categories = categories
  }
}

export const actions = {
  async fetchingCategories({commit}){
    try {
      const res = await this.$axios.$get(resource)
      commit('SET_CATEGORIES', res.content)
    }catch (e) {
      console.error(e.response.data)
    }
  }
}

export const getters = {
  getAllCates(state){
    return state.categories
  }
}
