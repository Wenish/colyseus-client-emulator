const state = {
    isMini: false
}

const mutations = {
    SET_IS_MINI (state, value) {
        state.isMini = value
    }
}

const actions = {
    toggleIsMini ({commit, state}) {
        commit('SET_IS_MINI', !state.isMini)
    }
}

const getters = {
    getIsMini: (state) => state.isMini
}

export default {
    state,
    mutations,
    actions,
    getters
}
  