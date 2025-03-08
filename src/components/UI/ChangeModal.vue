<template>
<div class="wrapper">
    <div class="email">
        <span class="hero-input">Введите почту</span>
        <UiInput></UiInput>
        <span class="recovery">На вашу почту придет код для восстановления пароля</span>
    </div>
    <div class="code">
        <span class="hero-input">Введите код</span>
        <UiInput></UiInput>
    </div>
</div>
</template>

<script setup>
import UiInput from './UiInput.vue';
</script>

<style scoped>
.wrapper{
    background: #28242A;
    width: 672px;
    height: 587px;
    border: 5px solid #FFF6F3;
    border-radius: 9px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;
}
.hero-input{
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;

}
.email{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
    width: min-content;
}
.recovery {
    color: #9B9B9B;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;

}
@media (max-width: 750px) {
    .wrapper{
        height: 65%;
    }
}
</style>