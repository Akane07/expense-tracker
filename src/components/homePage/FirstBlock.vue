<template>
<Header></Header>
<div class="wrapper">
<div class="block-first">
    <div class="line">Трекер Финансов</div>
    <div class="block-hero-left">
        <div class="left-top"></div>
        <div class="left-bottom"></div>
    </div>
    <div class="block-hero-right">
        
    </div>
</div>
</div>
</template>

<script setup>
import Header from '../UI/Header.vue';
</script>


<style scoped>
.wrapper{
    padding: 186px 51px;
}
.block-first{
    width: 100%;
    display: flex;
    height: 626px;
    align-items: center;
    position: relative;
}
.block-hero-left{
    width: 50%;
    /* background: #1E1E27; */
    height: 100%;
    display: flex;
    flex-direction: column;
}
.left-top{
    width: 100%;
    height: 415px;
    background: #1E1E27;
    border-top-left-radius: 85px;
    border-bottom-left-radius: 85px;
}
.left-bottom{
    width: 100%;
    height: 211px;
    background: transparent;
    position: relative;
    /* border-top-right-radius: 95px;
    border-top: 15px solid #1E1E27;
    border-right: 15px solid #1E1E27;
    position: relative;
    top: -20px;
    right: -20px; */
}
.left-bottom::after{
    content: "";
    position: absolute;
    width: 90px;
    height: 90px;
    background: #28242A;
    border-radius: 50%;
    top: 0px;
    right: 0px;
    box-shadow: 40px -40px 0 #1E1E27;
}
.block-hero-right{
    width: 50%;
    background: #1E1E27;
    height: 100%;
    border-top-right-radius: 85px;
    border-bottom-right-radius: 85px;
    border-bottom-left-radius: 85px;
}
.line{
    right: 0px;
    top: 115px;
    position: absolute;
    height: 141px;
    width: 100%;
    background: linear-gradient(90deg, #B5182D 0%, rgba(227, 0, 30, 0) 100%);
    font-size: 96px;
    color: #ffffff;
    font-weight: 300;
    padding-left: 77px;
}
.line::before{
    content: "";
    height: 100%;
    width: 51px;
    background: #B5182D;
    position: absolute;
    left: -50px;
}
</style>