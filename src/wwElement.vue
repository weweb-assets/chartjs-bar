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
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    data() {
        return {
            chartInstance: null,
        };
    },
    computed: {
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
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
        isEditing() {
            if (this.chartInstance) this.chartInstance.destroy();
            this.initChart();
        },
        config() {
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
            if (this.chartInstance) this.chartInstance.destroy();
            const element = wwLib.getFrontDocument().getElementById('chartjs-vertical-bar').getContext('2d');
            if (!element) return;
            this.chartInstance = new Chart(element, this.config);
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
