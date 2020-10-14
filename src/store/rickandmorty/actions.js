import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export const getCharactersAPI = ({commit}) => {
    Vue.http.get(`${process.env.VUE_APP_BASE_API}characters`).then(
        response => {
            commit('SET_CHARACTERS', response.data);
            return response;
        },
        error    => error
    )
}

export const getEpisodesAPI = ({commit}) => {
    Vue.http.get(`${process.env.VUE_APP_BASE_API}episodes`).then(
        response => {
            commit('SET_EPISODES', response.data);
            return response;
        },
        error    => error
    )
}

export const getLocationsAPI = ({commit}) => {
    Vue.http.get(`${process.env.VUE_APP_BASE_API}locations`).then(
        response => {
            commit('SET_LOCATIONS', response.data);
            return response;
        },
        error    => error
    )
}