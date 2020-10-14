const mutations = {
    'SET_CHARACTERS'(state, characters){
        state.characters = characters;
    },
    'SET_EPISODES'(state, episodes){
        state.episodes = episodes;
    },
    'SET_LOCATIONS'(state, locations){
        state.locations = locations;
    }
}

export default mutations;