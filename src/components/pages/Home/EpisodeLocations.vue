<template>
    <b-modal :id="`modal-episode-locations-${episode.id}`" title="Episode Locations Detail">
        <h4>EP: {{episode.name}}</h4>
        <ul>
            <li v-for="(location, index) in getLocations" :key="index">
                {{location}}
            </li>
        </ul>
    </b-modal>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['episode'],

    computed: {
        ...mapGetters([
            'rickandmorty/getCharacters'
        ]),

        getLocations(){
            // Obtenemos los personajes que aparecen en el capítulo.
            const episodeCharacter = this.episode.characters.map( char => parseInt(char.split('/').pop()));

            // Vamos a buscar los locations.
            let results = this['rickandmorty/getCharacters'].results
                .filter( char => episodeCharacter.includes( char.id ))
                .map(({origin}) => origin.name);

            // Quitamos los elementos duplicados.
            results = [...new Set(results)];

            return results;
        }
    }
}
</script>