export const state = () => ({
  tabKey: ''
})

export const mutations = {
  SET_TAB_KEY(state, tabKey){
    state.tabKey = tabKey
  }
}

export const getters = {
  getTabKey(state){
    return state.tabKey
  }
}
