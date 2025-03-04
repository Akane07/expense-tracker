<template>
    <div v-if="chartType === 'Line'">
        <Line :data="chartData" :options="chartOptions"/>
    </div>
    <div v-else-if="chartType === 'Pie'">
      <Pie :data="chartData" :options="chartOptions"/>
    </div>
</template>

<script setup>
import { Line, Pie } from 'vue-chartjs';
import { Chart, plugins, registerables } from 'chart.js';
import { reactive, ref } from 'vue';

Chart.register(...registerables);


const props = defineProps({
    labels: {
        type: Array,
    },
    datasets: {
        type: Array,
    },
    chartType:{
        type: String,
    },
})

const chartData = reactive({
    labels: props.labels,
    datasets: props.datasets,
})

const chartOptions = reactive({
    plugins: {
        legend: {
            labels:{
                color: 'red'
            }
        }
    },
    scales: {
    x: {
      title: {
        display: true,
        text: 'Месяцы',
        color: 'red' // Цвет заголовка оси X
      },
      ticks: {
        color: '#e2e2e2' // Цвет меток оси X
      }
    },
    y: {
      title: {
        display: true,
        text: 'Сумма',
        color: 'red' // Цвет заголовка оси Y
      },
      ticks: {
        color: '#e2e2e2' // Цвет меток оси Y
      }
    }
  }
})

</script>