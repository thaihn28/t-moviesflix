const resource = 'api/v1/search'

export const state = () => ({
  result: {}
})

export const mutations = {
  SET_RESULT(state, result){
    state.result = result
  }
}

export const actions = {
  async handleSearch({commit}, payload){
    try {
      const res = await this.$axios.$get(resource + `?keyword=${payload.slug}` + `&pageNo=${payload.pageNo}&pageSize=${payload.pageSize}`)
      commit('SET_RESULT', res)
    }catch (e) {
      console.error(e.response.data)
    }
  }
}

export const getters = {
  getResult(state){
    return state.result
  }
}
