<template>
<div class="main-wrapper">
    <v-header></v-header>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>


import VHeader from "@/components/v-header";
export default {
    name: "MainWrapper",
    components: {VHeader}
}
</script>

<style scoped>
.main-wrapper {
    padding-right: 50px;
    padding-left: 50px;
    padding-bottom: 20px;
}

</style>