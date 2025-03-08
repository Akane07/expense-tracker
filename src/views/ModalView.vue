<template>
    <div class="wrapper">
        <ChangeModal></ChangeModal>
    </div>
</template>

<style scoped>
.wrapper{
    width: 100%;
    height: 100vh;
    background: #28242A;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
</style>

<script setup>
import ChangeModal from '../components/UI/ChangeModal.vue';
import LoginModal from '../components/UI/LoginModal.vue';
</script>