import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export const getCharactersAPI = ({commit}) => {
    return Vue.http.get(`${process.env.VUE_APP_BASE_API}character/`).then(
        response => {
            commit('SET_CHARACTERS', response.data);
            return response;
        },
        error    => error
    )
}

export const getEpisodesAPI = ({commit}) => {
    return Vue.http.get(`${process.env.VUE_APP_BASE_API}episode`).then(
        response => {
            commit('SET_EPISODES', response.data);
            return response;
        },
        error    => error
    )
}

export const getLocationsAPI = ({commit}) => {
    return Vue.http.get(`${process.env.VUE_APP_BASE_API}location`).then(
        response => {
            commit('SET_LOCATIONS', response.data);
            return response;
        },
        error    => error
    )
}