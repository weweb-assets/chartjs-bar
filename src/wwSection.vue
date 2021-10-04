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
                    labels: this.labels || [],
                    datasets: this.datasets || [],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Star Wars',
                        },
                    },
                },
            },
            chartInstance: null,
        };
    },
    computed: {
        datasets() {
            return this.content.datasets.map(item => {
                return {
                    label: item['Label'],
                    backgroundColor: item['Color'],
                    data: item['Data'],
                };
            });
        },
        labels() {
            return this.content.labels;
        },
    },
    watch: {
        datasets() {
            if (this.chartInstance) {
                this.chartInstance.destroy();
            } else {
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
            this.$nextTick(() => {
                if (this.chartInstance) this.chartInstance.destroy();
                this.chartInstance = new Chart(
                    wwLib.getFrontDocument().getElementById('chartjs-vertical-bar'),
                    this.config
                );
            });
        },
        reload() {
            if (this.chartInstance) {
                this.chartInstance.destroy();
            }
            this.initChart();
            console.log(this.chartInstance);
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
