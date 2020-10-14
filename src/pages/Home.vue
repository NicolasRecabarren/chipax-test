<template>
    <div class="container">
        <h1>Rick And Morty</h1>
        <ul class="counters row">
            <li v-for="(counter,index) in counters" :key="index" class="col-md-3">
                <CounterBox :counter="counter" />
            </li>
        </ul>
    </div>
</template>

<script>
import CounterBox from '../components/pages/Home/CounterBox.vue';

export default {
    components:{
        CounterBox
    },

    data(){
        return {
            counters: [
                {type: "character", charToCount: "c"},
                {type: "episode"  , charToCount: "e"},
                {type: "location" , charToCount: "l"},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    ul.counters{
        padding: 0;
        list-style: none;
        >li{
            display: inline-block;
            padding: 15px;
        }
    }
</style>