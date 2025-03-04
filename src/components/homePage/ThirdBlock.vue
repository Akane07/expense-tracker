<template>
<div class="wrapper">
    <div class="content">
        <span class="charts">ГРАФИКИ</span>
        <div class="left">
            <div class="top">
                <div class="line-top"></div>
                <div class="top-content">
                    <span>Графики покажут вашу <br>финансовую картину за <br>день, месяц или год, <br>помогая принимать <br>осознанные решения.</span>
                </div>
            </div>
            <div class="bottom">
                <div class="line-bottom"></div>
                <div class="bottom-content">
                    <span>Всё в одном месте — <br>просто, понятно и <br>эффективно!</span>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="chart">
                <ChartHome :labels = "labels" :datasets = "datasets" :chartType = 'chartType'/>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import ChartHome from '../UI/ChartHome.vue';
const labels = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
]
const datasets = [{
  label: 'Расходы',
  data: [100, 10, 150, 10, 23, 44, 34, 34, 12, 24, 111, 123],
  borderColor: ['#b5182d'],
  backgroundColor: ['#a00c07', '#f49e82', 'green', 'red', 'yellow'],
  borderWidth: 2,
  tension: 0.1
}]

const chartType = 'Line'
</script>

<style scoped>
.wrapper{
    padding-top: 108px;
    padding-bottom: 450px;
}
.content{
    position: relative;
    width: 100%;
    height: 480px;
    display: flex;
}
.left{
    width: 41%;
    height: 100%;
    top: 24%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
}
.top-content{
    font-weight: 300;
    font-size: 24px;
    line-height: 42.2px;
    letter-spacing: 0%;
    text-align: center;
    background: #1E1E27;
    box-shadow: 0px 0px 32.5px 0px #00000040;
    margin-left: 113px;
    margin-right: 147px;
    border-radius: 73px;
    padding: 40px 40px;
    color: #ffffff;
    position: relative;
    z-index: 2;
}
.bottom-content{
    font-weight: 300;
    font-size: 24px;
    line-height: 42.2px;
    letter-spacing: 0%;
    text-align: center; 
    background: #1E1E27;
    box-shadow: 0px 0px 32.5px 0px #00000040;
    margin-left: 113px;
    margin-right: 147px;
    border-radius: 73px;
    padding: 40px 40px;
    color: #ffffff;
    position: relative;
}
.top{
    position: relative;
    z-index: 2;
}
.bottom{
    position: relative;
    z-index: 2;
}
.line-top{
    position: absolute;
    background: linear-gradient(90deg, #B5182D 0%, rgba(227, 0, 30, 0) 100%);
    width: 240%;
    top: 40%;
    left: -25%;
    z-index: 1;
    height: 71px;
}
.line-bottom{
    position: absolute;
    background: linear-gradient(90deg, #B5182D 0%, rgba(227, 0, 30, 0) 100%);
    width: 240%;
    top: 30%;
    left: -25%;
    z-index: 0;
    height: 71px;
}
.right{
    width: 58%;
    height: 75%;
    top: 48%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
}
.chart{
    width: 700px;
    z-index: 10;
}
.charts{
    font-family: Roboto Slab;
    font-weight: 400;
    font-size: 64px;
    line-height: 84.41px;
    letter-spacing: 0%;
    text-align: center;
    color: #B5182D;
    position: absolute;
    top: 0px;
    right: 40%;
    left: 40%;
}
</style>