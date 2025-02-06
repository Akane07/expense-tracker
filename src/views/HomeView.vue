<template>
    <div class="home">
        <Header></Header>
        <!-- <img src="../assets/patern 1.svg" alt="" class="patern-1">
        <img src="../assets/patern 2.svg" alt="" class="patern-2">
        <img src="../assets/pie.svg" alt="" class="pie"> -->
    </div>
    <div class="foot-content">
        <span>E X P E N S E</span> <span>T R A C K E R</span>
    </div>
    <footer>
        
    </footer>
</template>

<script setup>
import Header from '../components/Header.vue'
</script>

<style scoped>
.home {
    width: auto;
    height: 1698px;
    height: 100vh;
    background: linear-gradient(252.44deg, #37415A 0%, #0b0f1f 100%);
}
.patern-1{
    position: absolute;
    top: 0;
}
.patern-2{
    position: absolute;
    top: 0;
    right: 0;
}
.pie{
    position: absolute;
    right: 0;
}
.foot-content{
    height: 70px;
    width: 100%;
    background: #181D31;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    gap: 150px;
}
footer{
    background: #28242A;
    height: 163px;
    width: 100%;
}
</style>