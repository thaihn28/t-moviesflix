const resource = 'api/v1/actors'

export const state = () => ({
  actors: [],
  actor: {}
})

export const mutations = {
  SET_ACTORS(state, actors) {
    state.actors = actors
  },
  SET_ACTOR(state, actor){
    state.actor = actor
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
  },
  async fetchingActorDetail({commit}, slug){
    try {
      const res = await this.$axios.$get(`${resource}/detail/${slug}`)
      commit('SET_ACTOR', res)
    }catch (e) {
      console.error(e.response.data)
    }
  }
}

export const getters = {
  getAllActors(state){
    return state.actors
  },
  getActor(state){
    return state.actor
  }
}
