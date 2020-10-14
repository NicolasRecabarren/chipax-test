import Vue from 'vue'
import Vuex from 'vuex'

import RickAndMortyStore from './rickandmorty/index';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    modules: {
        rickandmorty: RickAndMortyStore
    }
});

export default store;