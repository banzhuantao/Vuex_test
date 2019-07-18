const mutations = {
  SET_HOME_BANNER_LIST (state, payload) {
    state.bannerList = payload.data
  },
  SET_HOME_PRO_LIST (state, payload) {
    state.proList = payload.data
  }
}

export default mutations
