<template>
    <b-overlay :show="showOverlay" rounded="sm" spinner-variant="success">
        <div class="box-shadow">
            <div class="box-header">
                <h2>{{typeRequest}}</h2>
            </div>
            <div class="box-body">
                <h2><span>{{getTotalOccurences}}</span></h2>
                <h5>Veces</h5>
                <p class="text-center">
                    Ha aparecido la letra "{{counter.charToCount.toUpperCase()}}" en {{getTotalElements}} {{counter.type}}.
                    <br />
                    <span class="time">Tomó un total de <b>{{endTime}}</b> ms.</span>
                </p>
            </div>

            <div class="box-footer">
                <b-button
                    :class="showOcurrences ? null : 'collapsed'"
                    :aria-expanded="showOcurrences ? 'true' : 'false'"
                    :aria-controls="'collapse-'+counter.type"
                    @click="showOcurrences = !showOcurrences"
                    variant="outline-primary"
                    block>
                    Ver Listado
                </b-button>
                <b-collapse :id="'collapse-'+counter.type" class="mt-2" v-model="showOcurrences">
                    <ul>
                        <li v-for="(element,index) in this[`rickandmorty/${counter.getter}`]" :key="index">{{element.name}}</li>
                    </ul>
                </b-collapse>
            </div>
        </div>
    </b-overlay>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    props: ['counter'],

    data(){
        return {
            typeRequest: 'Characters',
            
            showOverlay: true,
            showOcurrences: false,
            
            startTime: new Date().getTime(),
            endTime: 0
        }
    },

    computed: {
        ...mapGetters([
            'rickandmorty/getCharacters',
            'rickandmorty/getEpisodes',
            'rickandmorty/getLocations',
        ]),

        // Retornamos la cantidad de ocurrencias de la letra dentro de los episodes/characters/locations según corresponda.
        getTotalOccurences(){
            return this[`rickandmorty/${this.counter.getter}`]
                .map(({name}) => name)  // Traemos solo los nombres.
                .join('')               // Unimos todos los nombres en un solo texto en el cual buscar.
                .toLowerCase()          // Cambiamos todas las letras a minúsculas.
                .replace(/[abdfghijkmnopqrstuvwxyz]\s/g,'') // Reemplazamos las letras que no utilizaremos en la búsqueda para disminuir el tamaño del texto lo más posible-
                .split(this.counter.charToCount)    // Cortamos el texto (array) por el caracter que estamos buscando.
                .length -1;             // De acuerdo al largo del array será la cantidad de ocurrencias del caracter.
        },

        // Retornamos la cantidad total de elementos traídos desde la API.
        getTotalElements(){
            return this[`rickandmorty/${this.counter.getter}`].length;
        }
    },

    async created(){
        if(this.counter.type === "episode")
            this.typeRequest = "Episodes";
        if(this.counter.type === "location")
            this.typeRequest = "Locations";

        this[`rickandmorty/${this.counter.mutation}`]([]);
        let page = 1;

        // La primera llamada la haremos de manera síncrona para obtener la cantidad de páginas.
        const firstCall = await this.callAPI(page, this.typeRequest);
        
        // De acuerdo a la cantidad de páginas realizaremos peticiones asíncronas a la API y los resultados
        // los guardaremos en el store para luego poder consultarlos desde otros componentes de manera más
        // sencilla.
        for(page = 2; page <= firstCall.info.pages; page++ ){
            this.callAPI(page, this.typeRequest);
        }
        this.showOverlay = false;
    },

    methods: {
        ...mapMutations([
            'rickandmorty/SET_CHARACTERS',
            'rickandmorty/SET_EPISODES',
            'rickandmorty/SET_LOCATIONS',
        ]),
        ...mapActions([
            'rickandmorty/getCharactersAPI',
            'rickandmorty/getEpisodesAPI',
            'rickandmorty/getLocationsAPI'
        ]),

        callAPI(page,typeRequest){
            return this[`rickandmorty/get${typeRequest}API`](page).then(response => {

                // Seteamos en el store todos los personajes encontrados.
                this[`rickandmorty/${this.counter.mutation}`](
                    this[`rickandmorty/${this.counter.getter}`].concat(response.results)
                );

                this.endTime = new Date().getTime() - this.startTime;
                return response;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .box-shadow{
        padding: 0;
        max-height: 400px;
        .box-header > h2{
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom: 1px solid #ddd;
            margin-bottom: 10px;
            background-color: #563D7D;
            color: #F9F9F9;
            padding: 5px 15px;
            text-align: center;
        }
        .box-body{
            margin-top: 20px;
            padding: 0 20px;
            > h2, > h5{
                text-align: center;
            }
            > h2 > span{
                border-radius: 50%;
                background-color: #58D3B1;
                padding: 10px;
            }
            >h2{ margin-bottom: 15px;}
            > p{
                line-height: 20px;
                height: 40px;
                span{ font-size: 13px; }
            }
        }
        .box-footer{
            max-height: 200px;
            overflow-y: hidden;
            padding: 0 20px 20px 20px;
            .btn{
                margin-top: 15px;
            }
            .collapse{
                ul{
                    max-height: 120px;
                    overflow-y: auto;
                    padding-left: 10px;
                    li{
                        font-size: 13px;
                    }
                }
            }
        }
    }
</style>