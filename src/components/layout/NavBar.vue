<template>
    <b-navbar variant="dark" type="light" fixed="top">
        <b-navbar-brand href="#">{{brandText}}</b-navbar-brand>

        <b-collapse is-nav>
            <b-navbar-nav class="ml-auto">
                <img src="/img/rick-running.png" alt="">
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    data(){
        return {
            brandText: "CHIPAX - TEST"
        }
    }
}
</script>

<style lang="scss" scoped>
    nav.navbar{
        max-height: 60px;
        background-color: #2c3e50 !important;
        > a{ color: #FFF; }
        > a:hover{ color: #41B883; }
        img{
            height: 40px;
        }
    }
</style>