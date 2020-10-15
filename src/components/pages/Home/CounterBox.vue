<template>
    <b-overlay :show="showOverlay" rounded="sm" spinner-variant="success">
        <div class="box-shadow">
            <div class="box-body">
                <h2><span>{{cantChar}}</span></h2>
                <h5>Veces</h5>
                Ha aparecido la letra "{{counter.charToCount.toUpperCase()}}" en todos los <b>{{counter.type}}</b>.
            </div>

            <div class="box-footer">
                <b-button
                    :class="showOcurrences ? null : 'collapsed'"
                    :aria-expanded="showOcurrences ? 'true' : 'false'"
                    :aria-controls="'collapse-'+counter.type"
                    @click="showOcurrences = !showOcurrences"
                    block>
                    Ver ocurrencias
                </b-button>
                <b-collapse :id="'collapse-'+counter.type" class="mt-2" v-model="showOcurrences">
                    <ul>
                        <li v-for="element in results" :key="element.id">{{element.name}}</li>
                    </ul>
                </b-collapse>
            </div>
        </div>
    </b-overlay>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: ['counter'],

    data(){
        return {
            cantChar: 0,
            results: [],
            showOverlay: true,
            showOcurrences: false,
            time: 0,
        }
    },

    created(){
        let typeRequest = "Characters";
        if(this.counter.type === "episode")
            typeRequest = "Episodes";
        if(this.counter.type === "location")
            typeRequest = "Locations";

        this[`rickandmorty/get${typeRequest}API`]().then(response => {
            if(response.ok){
                this.results = response.body.results.filter( ({name}) => name.includes(this.counter.charToCount))
                
                this.cantChar = this.results
                        .map(({name}) => name)
                        .join(',')
                        .split(this.counter.charToCount)
                        .length;
                
                this.showOverlay = false;
            }
        });
    },

    methods: {
        ...mapActions([
            'rickandmorty/getCharactersAPI',
            'rickandmorty/getEpisodesAPI',
            'rickandmorty/getLocationsAPI'
        ])
    }
}
</script>

<style lang="scss" scoped>
    .box-shadow{
        padding: 20px;
        max-height: 350px;
        .box-body{
            > h2, > h5{
                text-align: center;
            }
            > h2 > span{
                border-radius: 50%;
                background-color: #42B883;
                /*background-color: #F4EF32;*/
                /*background-color: #FFD266;*/
                padding: 10px;
            }
        }
        .box-footer{
            max-height: 200px;
            overflow-y: hidden;
            .btn{
                margin-top: 15px;
            }
            .collapse{
                ul{
                    max-height: 135px;
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