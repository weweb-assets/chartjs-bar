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
            config: {
                type: 'bar',
                data: {
                    labels: ['Tatooine', 'Coruscant', 'Kashyyyk', 'Dagobah', 'Bespin', 'Endor', 'Hoth'],
                    datasets: [...this.content.datasets],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                },
            },
            chartInstance: null,
        };
    },
    watch: {
        'content.datasets'(data) {
            if (this.chartInstance) {
                setTimeout(() => {
                    this.chartInstance.reset();
                    this.chartInstance.update();
                    console.log('okok');
                }, 500);
            }
            console.log('dataset', data);
            this.initChart();
        },
        'content.labels'() {
            if (this.chartInstance) {
                this.chartInstance.reset();
                this.chartInstance.update();
            }
            this.initChart();
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
            this.$nextTick(() => {
                if (this.chartInstance) this.chartInstance.destroy();
                this.chartInstance = new Chart(
                    wwLib.getFrontDocument().getElementById('chartjs-vertical-bar'),
                    this.config
                );
            });
        },
        reload() {
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
