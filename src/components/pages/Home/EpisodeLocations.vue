<template>
    <b-modal :id="`modal-episode-locations-${episode.id}`" title="Episode Locations Detail" hide-footer>
        <h4>EP: {{episode.name}}</h4>
        Tomó un total de <b>{{endTime}}</b> ms.
        <p>El Episode tiene un total de <b>{{getLocations.length}}</b> locations (origin).</p>
        <ul>
            <li v-for="(location, index) in getLocations" :key="index">
                {{location}}
            </li>
        </ul>
        <b-button block variant="primary" @click="$bvModal.hide(`modal-episode-locations-${episode.id}`)">
            Cerrar
        </b-button>
    </b-modal>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['episode'],

    data() {
        return {
            startTime: new Date().getTime(),
            endTime: 0
        }
    },

    computed: {
        ...mapGetters([
            'rickandmorty/getCharacters'
        ]),

        getLocations(){
            // Obtenemos los IDs de los personajes que aparecen en el capítulo.
            const episodeCharacter = this.episode.characters.map( char => parseInt(char.split('/').pop()));

            // Vamos a buscar los locations.
            let results = this['rickandmorty/getCharacters']
                .filter( char => episodeCharacter.includes( char.id ))
                .map(({origin}) => origin.name);

            // Quitamos los elementos duplicados.
            results = [...new Set(results)];

            this.setEndTime();
            return results;
        }
    },

    methods: {
        setEndTime(){
            this.endTime = new Date().getTime() - this.startTime;
        }
    }
}
</script>