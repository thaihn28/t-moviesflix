export const state = () => ({
  user: {}
})

export const mutations = {
  setUser(state, user){
    state.user = user
  },
  removeUser(state, value){
    state.user = value
  }
}

export const getters = {
  getUser(state){
    return state.user
  }
}
