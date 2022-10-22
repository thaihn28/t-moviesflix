export const state = () => ({
  error: {}
})

export const mutations = {
  setError(state, val = {}){
    state.error = val
  },
}

export const getters = {
  getError(state){
    return state.error
  }
}
