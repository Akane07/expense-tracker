<template>
  <div>
    <ChartBar :labels = "labels" :datasets = "datasets" :chartType = 'chartType'/>
  </div>
</template>

<script setup>
import ChartBar from '../components/ChartBar.vue';

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
div{
  width: 700px;
  background: #28242a;
}
</style>