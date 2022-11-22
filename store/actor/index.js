const resource = 'api/v1/actors'

export const state = () => ({
  actors: []
})

export const mutations = {
  SET_ACTORS(state, actors) {
    state.actors = actors
  }
}

export const actions = {
  async fetchingActors({commit}) {
    try {
      const res = await this.$axios.$get(resource)
      commit('SET_ACTORS', res.content)
    } catch (e) {
      console.error(e.response.data)
    }
  }
}

export const getters = {
  getAllActors(state){
    return state.actors
  }
}
