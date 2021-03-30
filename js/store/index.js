import Vue from 'vue'
import Vuex from 'vuex'

import state from './states'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// import {replaceState} from 'vue-router/src/util/push-state'

Vue.use(Vuex)

export const store=new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  })