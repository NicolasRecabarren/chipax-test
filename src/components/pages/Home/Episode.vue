<template>
    <li class="col-md-6 col-lg-4">
        <div class="box-shadow">
            <div class="color-tag"></div>
            <div class="episode-details">
                <p class="episode-name">{{`${episode.episode}: ${episode.name}`}}</p>
                <p>
                    <b>Fecha de transmisión:</b> {{episode.air_date}}<br />
                    <b>Cant. Personajes:</b> {{episode.characters.length}}
                </p>
                <b-button size="sm" variant="outline-primary" block v-b-modal="`modal-episode-locations-${episode.id}`">
                    Ver locations
                </b-button>
                <EpisodeLocations :episode="episode" />
            </div>
        </div>
    </li>
</template>

<script>
import EpisodeLocations from './EpisodeLocations.vue';

export default {
    props: ['episode'],

    components: {
        EpisodeLocations
    }
}
</script>

<style lang="scss" scoped>
    li{
        margin-bottom: 15px;
        div{
            height: 145px;
            .color-tag{
                background-color: #563D7D;
                width: 35px;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                position: absolute;
            }
            >.episode-details{
                font-size: 15px;
                margin-left: 35px;
                padding: 10px;
                .episode-name{
                    line-height: 15px;
                    max-height: 30px;
                    font-weight: bold;
                }
            }
            >p:nth-child(2){
                color: #707579;
                margin-bottom: 10px;
                font-size: 13px;
            }
        }
    }
</style>