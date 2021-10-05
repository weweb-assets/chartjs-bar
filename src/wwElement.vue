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
                },
            };
        },
    },
    watch: {
        config() {
            if (
                this.content.labels &&
                this.content.labels.length &&
                this.content.datasets &&
                this.content.datasets.length
            ) {
                if (this.chartInstance) this.chartInstance.destroy();
                this.initChart();
            }
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
            const element = wwLib.getFrontDocument().getElementById('chartjs-vertical-bar');
            this.chartInstance = new Chart(element, this.config);
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
