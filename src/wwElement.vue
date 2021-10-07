<template>
    <div class="chart-container" style="position: relative">
        <canvas id="chartjs-vertical-bar"></canvas>
    </div>
</template>

<script>
import {
    Chart,
    BarElement,
    BarController,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    CategoryScale,
    Legend,
    Title,
    Tooltip,
    SubTitle,
} from 'chart.js';

Chart.register(
    BarElement,
    BarController,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    CategoryScale,
    Legend,
    Title,
    Tooltip,
    SubTitle
);

export default {
    props: {
        content: { type: Object, required: true },
    },
    data() {
        this.chartInstance = null;
        return this.chartInstance;
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
                    indexAxis: this.content.axis,
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: this.content.legendPosition,
                            labels: { usePointStyle: true },
                            onHover: this.handleHover,
                            onLeave: this.handleLeave,
                        },
                    },
                    interaction: {
                        intersect: false,
                    },
                    scales: {
                        x: {
                            stacked: this.content.stacked,
                        },
                        y: {
                            stacked: this.content.stacked,
                        },
                    },
                },
            };
        },
    },
    watch: {
        config() {
            if (
                this.chartInstance &&
                this.content.labels &&
                this.content.labels.length &&
                this.content.datasets &&
                this.content.datasets.length
            ) {
                this.chartInstance.data.labels = this.content.labels;
                this.chartInstance.data.datasets = this.content.datasets;
                this.chartInstance.update();
            }
        },
        'content.legendPosition'() {
            this.chartInstance.options.plugins.legend.position = this.content.legendPosition;
            this.chartInstance.update();
        },
        'content.legendAlignement'() {
            this.chartInstance.options.plugins.legend.align = this.content.legendAlignement;
            this.chartInstance.update();
        },
        'content.axis'() {
            if (this.chartInstance) this.chartInstance.destroy();
            this.initChart();
        },
        'content.stacked'() {
            if (this.chartInstance) this.chartInstance.destroy();
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
