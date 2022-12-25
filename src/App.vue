<template>
    <div id="app">
    <MainWrapper></MainWrapper>
    </div>
</template>

<script>
import MainWrapper from "@/components/v-main-wrapper";

export default {
    name: 'app',
    components: {
        MainWrapper
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Arial,sans-serif;
    text-align: center;
    margin-top: 160px;
}
</style>