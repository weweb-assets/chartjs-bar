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
                    labels: this.labels || ['Tatooine', 'Coruscant', 'Kashyyyk', 'Dagobah', 'Bespin', 'Endor', 'Hoth'],
                    datasets: this.datasets || [
                        {
                            label: 'placeholder',
                            backgroundColor: 'rgb(255, 99, 132)',
                            data: [100.0, 5.0, 2.0, 20.0, 30.0, 10.0, 45.0],
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                    },
                },
            };
        },
        datasets() {
            return this.content.datasets.map(item => {
                return {
                    label: item[this.content.labelField],
                    backgroundColor: item[this.content.backgroundColorField],
                    data: item[this.content.dataField],
                };
            });
        },
        labels() {
            return this.content.labels;
        },
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
