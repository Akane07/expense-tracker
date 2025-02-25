<template>
<Header></Header>
<div class="wrapper">
<div class="block-first">
    <div class="line">Трекер Финансов</div>
    <div class="block-hero-left">
        <div class="left-top">
            <span>"Финансовая грамотность — это не просто знание, как зарабатывать деньги, но и понимание, как управлять ими." - Роберт Кийосаки.</span>
        </div>
        <div class="left-bottom"></div>
    </div>
    <div class="block-hero-right">
        <div class="hero-content-block">
            <span>Наше приложение настроено на то, чтобы как можно больше людей молги отслеживать свои финансы и взять их под контроль.</span>
            <span>Мы понимаем, как важно иметь ясное представление о своих доходах и расходах.</span>
        </div>
    </div>
</div>
<div class="block-second">
    <div class="why-block">
        <div class="why-hero">
            <span>ЗАЧЕМ?</span>
        </div>
        <div class="why-hero-content">
            В современном мире управление личными финансами <br>стало неотъемлемой частью жизни каждого человека. <br>
Сайт позволяет легко отслеживать ваши расходы и <br>доходы, что помогает вам видеть полную картину <br>своих финансов, так же инструменты анализа помогут <br>вам понять, где вы тратите больше всего денег и где <br>можно сэкономить.
        </div>
    </div>
    <div class="line-second">
        <div class="line-second-content">
            <span>Статистика не врет!</span>
        </div>
    </div>
</div>
<div class="block-third">
    <div class="third-left">
        <span>
            80% людей не <br>замечают мелкие <br>траты, которые в <br>итоге составляют <br>значительную сумму <br>в месяц.
        </span>
    </div>
    <div class="third-right">

    </div>
</div>
</div>
</template>

<script setup>
import { ref } from 'vue';
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
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-left: 126px;
    padding-bottom: 73px;
}
.left-top{
    font-size: 15px;
    font-weight: 300;
    color: #ffffff;
    /* box-shadow: 0px 0px 32.5px 0px #00000040; */
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
    /* position: relative; */
    display: flex;
    padding-top: 30px;
    padding-right: 118px;
    justify-content: end;
    /* box-shadow: 15px -20px 32.5px 0px #00000040; */
}
.hero-content-block{
    height: 527px;
    width: 531px;
    background: #28242A;
    border-radius: 85px;
    padding: 100px 51px 30px;
    display: flex;
    flex-direction: column;
    gap: 47px;
    align-items: center;
    text-align: center;
    z-index: 10;
}
.hero-content-block span{
    font-weight: 400;
    font-size: 24px;
    /* white-space: wrap; */
    color: #ffffff;
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
    z-index: 9;
}
.line::before{
    content: "";
    height: 100%;
    width: 51px;
    background: #B5182D;
    position: absolute;
    left: -50px;
}
.block-second{
    width: 100%;
    display: flex;
    height: 441px;
    align-items: center;
    position: relative;
    top: -171px;
}
.why-block{
    width: 47%;
    height: 100%;
    background: #1E1E27;
    border-radius: 85px;
    border-top-right-radius: 50px;
    box-shadow: 0px 0px 32.5px 0px #00000040;
    padding-top: 47px;
    padding-left: 45px;
    padding-right: 45px;
    padding-bottom: 68px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    color: #ffffff;
}
.why-hero{
    width: 645px;
    height: 141px;
    background: linear-gradient(90deg, rgba(181, 24, 45, 0) 0%, #B5182D 52%, rgba(227, 0, 30, 0) 100%);
    font-size: 96px;
    font-weight: 400;
    border-radius: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.why-hero-content{
    white-space:  pre-wrap;
    font-size: 20px;
    text-align: center;
}
.line-second {
    height: 141px;
    width: 53%;
    background: linear-gradient(180deg, #B5182D 0%, rgba(227, 0, 30, 0) 100%);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0px;
    top: 191px;
}
.line-second-content{
    background: #1E1E27;
    border-radius: 85px;
    box-shadow: 0px 0px 32.5px 0px #00000040;
    font-size: 40px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 105px;
    color: #ffffff;
}
.line-second::after {
    content: "";
    height: 100%;
    width: 51px;
    position: absolute;
    background: linear-gradient(180deg, #B5182D 0%, rgba(227, 0, 30, 0) 100%);
    right: -51px;
}
.block-third{
    width: 100%;
    height: 607px;
    position: relative;
    display: flex;
    justify-content: space-between;
    top: -241px;
}
.third-left{
    width: 47%;
    height: 508px;
    background: #1E1E27;
    position: relative;
    top: 100px;
    border-radius: 85px;
    box-shadow: 0px 0px 32.5px 0px #00000040;
    display: flex;
    align-items: center;
    
}
.third-left span{
    margin-left: 85px;
    text-align: center;
    color: #ffffff;
    font-size: 24px;
}
.third-left::after{
    content: "80%";
    font-size: 96px;
    color: #B5182D;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 43%;
    height: 124px;
    position: absolute;
    background: #e2e2e2;
    border-radius: 85px;
    right: 15px;
    top: 175px;
}
.third-left::before{
    content: "А вы знали..";
    color: #ffffff;
    font-size: 64px;
    font-weight: 500;
    position: absolute;
    display: flex;
    align-items: center;
    padding-left: 75px;
    margin-left: 45px;
    margin-right: 25px;
    height: 102px;
    border-radius: 25px;
    top: 25px;
    width: 85%;
    background: linear-gradient(-90deg, rgba(181, 24, 45, 0) 0%, #B5182D 99.25%);

}
.third-right{
    height: 100%;
    width: 47%;
    background: #1E1E27;
    border-radius: 85px;
    box-shadow: 0px 0px 32.5px 0px #00000040;
}
</style>