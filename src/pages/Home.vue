<template>
    <div class="page-content">
        <section>
            <h2>Char Counter</h2>
            <ul class="counters row">
                <li v-for="(counter,index) in counters" :key="index" class="col-md-4">
                    <CounterBox :counter="counter" />
                </li>
            </ul>
        </section>
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
    .page-content{
        section {
            h2{
                padding: 10px 5px;
                border-bottom: 1px solid #5A6268;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
    }
    ul.counters{
        padding: 0;
        list-style: none;
        >li{
            display: inline-block;
            padding: 15px;
        }
    }
</style>