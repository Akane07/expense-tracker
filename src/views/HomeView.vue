<template>
    <div class="home">
        <FirstBlock></FirstBlock>
        <Footer></Footer>
    </div>
</template>

<script setup>
import FirstBlock from '../components/homePage/FirstBlock.vue';
import Footer from '../components/UI/Footer.vue';
</script>

<style scoped>
.home {
    width: auto;

    height: auto;
    /* height: 100vh; */
    background: #28242A;
}

</style>