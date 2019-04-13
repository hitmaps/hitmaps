import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sessionId: ""
    },

    mutations: {
        setSessionId(state, id) {
            state.sessionId = id
        }
    },
    actions: {
        setSessionId(context, id) {
            context.commit('setSessionId', id)
        }
    }
})