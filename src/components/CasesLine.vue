<template>
  <canvas ref="myChart" height="100"></canvas>
</template>

<script>
import Chart from "chart.js";
export default {
  props: {
    label: {
      type: Array,
    },
    chartData: {
      type: Array,
    },
  },
  mounted() {
    new Chart(this.$refs.myChart, {
      type: "pie",
      data: {
        labels: this.label,
        datasets: [
          {
            label: "A",
            borderColor: "white",
            backgroundColor: ["#F2994A", "#56CCF2", "#6FCF97", "#EB5757", "#9B51E0", "#56CCF2", "#6FCF97", "#BDBDBD", "#F2C94C", "#BB6BD9"],
            data: this.chartData,
          },
        ],
      },
      options: {
        // scales: {
        //   yAxes: [
        //     {
        //       ticks: {
        //         beginAtZero: true,
        //       },
        //     },
        //   ],
        // },
      },
    });
  },
};
</script>