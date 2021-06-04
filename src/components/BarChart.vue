<template>
  <canvas ref="myChart" height="100"></canvas>
</template>

<script>
import Chart from "chart.js";
export default {
  props: {
    info: {
      type: String
    },
    label: {
      type: Array,
    },
    chartData: {
      type: Array,
    },
    color: {
      type: String,
    }
  },
  mounted() {
    new Chart(this.$refs.myChart, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Mei",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Okt",
          "Nov",
          "Des",
        ],
        datasets: [
          {
            label: this.info,
            borderColor: "white",
            backgroundColor: this.color,
            data: this.chartData,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },
};
</script>