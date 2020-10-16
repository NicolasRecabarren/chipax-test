import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export const getCharactersAPI = ({commit}, page = 1) => {
    console.log(commit);

    return Vue.http.get(`${process.env.VUE_APP_BASE_API}character/?page=${page}`).then(
        response => response.data,
        () => {return {results: []}} // En caso de error, retornaremos un array vacío.
    )
}

export const getEpisodesAPI = ({commit}, page = 1) => {
    console.log(commit);

    return Vue.http.get(`${process.env.VUE_APP_BASE_API}episode?page=${page}`).then(
        response => response.data,
        () => {return {results: []}} // En caso de error, retornaremos un array vacío.
    )
}

export const getLocationsAPI = ({commit}, page = 1) => {
    console.log(commit);

    return Vue.http.get(`${process.env.VUE_APP_BASE_API}location?page=${page}`).then(
        response => response.data,
        () => {return {results: []}} // En caso de error, retornaremos un array vacío.
    )
}