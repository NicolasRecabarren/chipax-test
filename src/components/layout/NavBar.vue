<template>
    <b-navbar variant="dark" type="light" fixed="top">
        <b-navbar-brand href="#">{{brandText}}</b-navbar-brand>
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
        > a{ color: #FFF; }
        > a:hover{ color: #41B883; }
    }
    
</style>