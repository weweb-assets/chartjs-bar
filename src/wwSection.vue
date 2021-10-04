<template>
    <div class="chart-container" style="position: relative">
        <canvas id="chartjs-vertical-bar"></canvas>
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
    props: {
        content: { type: Object, required: true },
    },
    data() {
        return {
            chartInstance: null,
        };
    },
    computed: {
        config() {
            return {
                type: 'bar',
                data: {
                    labels: this.content.labels,
                    datasets: this.content.datasets,
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                    },
                    scales: {
                        y: {
                            // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
                            suggestedMin: 30,

                            // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
                            suggestedMax: 50,
                        },
                    },
                },
            };
        },
        // datasets() {
        //     return this.content.datasets.map(item => {
        //         return {
        //             label: item[this.content.labelField],
        //             backgroundColor: item[this.content.backgroundColorField],
        //             data: item[this.content.dataField],
        //         };
        //     });
        // },
    },
    mounted() {
        this.initChart();
    },
    beforeUnmount() {
        this.chartInstance.destroy();
    },
    methods: {
        initChart() {
            if (this.chartInstance) this.chartInstance.destroy();
            this.chartInstance = new Chart(
                wwLib.getFrontDocument().getElementById('chartjs-vertical-bar'),
                this.config
            );
        },
        reload() {
            if (this.chartInstance) this.chartInstance.destroy();
            this.initChart();
        },
    },
};
</script>

<style lang="scss" scoped>
.chart-container {
    width: inherit;
    height: inherit;
    #chartjs-vertical-bar {
        width: 100% !important;
        height: 100% !important;
    }
}
</style>
