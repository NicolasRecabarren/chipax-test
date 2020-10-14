import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

const RickAndMortyStore = {
    namespaced: true,
    state: {
        locations : [],
        episodes  : [],
        characters: []
    },
    getters,
    mutations,
    actions
};

export default RickAndMortyStore;