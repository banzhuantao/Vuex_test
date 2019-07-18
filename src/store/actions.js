const actions = {
  setHomeBannerList (state, payload) {
    state.commit('SET_HOME_BANNER_LIST', payload)
  },
  setHomeProList ({ commit }, payload) {
    commit('SET_HOME_PRO_LIST', payload)
  }
}

export default actions
