<template>
    <div class="chart-container" style="position: relative">
        <canvas class="chartjs-bar"></canvas>
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
            let labels = [];
            let datasets = [];

            if (this.content.dataType === 'no-code') {
                labels = undefined;
                const data =
                    (!this.content.data || Array.isArray(this.content.data)
                        ? this.content.data
                        : this.content.data.data) || [];

                const groupBy = this.content.groupBy;
                const groupByProperty = this.content.groupByProperty;
                const dataXField = this.content.dataXField;
                const dataXFieldProperty = this.content.dataXFieldProperty;
                const dataYField =
                    this.content.yAxis === 'record-count' ? this.content.dataXField : this.content.dataYField;
                const dataYFieldProperty = this.content.dataYFieldProperty;
                const aggregate = this.content.yAxis === 'record-count' ? 'record-count' : this.content.aggregate;
                const colors = this.content.colors;
                if (!groupBy) {
                    datasets = [{ label: dataXField, backgroundColor: colors[0], data: [] }];
                    if (!data.length || !Array.isArray(_.get(data[0], dataXField))) {
                        datasets[0].data = data.map(item => ({
                            x: _.get(item, dataXField),
                            y: this.aggregate(
                                aggregate,
                                data
                                    .filter(elem => _.get(elem, dataYField) === _.get(item, dataYField))
                                    .map(elem => _.get(elem, dataYField))
                            ),
                        }));
                    } else {
                        const arrayValues = [
                            ...new Set(
                                data
                                    .map(item => {
                                        const result = _.get(item, dataXField, []);
                                        return Array.isArray(result)
                                            ? result.map(elem => _.get(elem, dataXFieldProperty, elem))
                                            : result;
                                    })
                                    .flat()
                            ),
                        ];
                        datasets[0].data = arrayValues.map(arrayValue => ({
                            x: arrayValue,
                            y: this.aggregate(
                                aggregate,
                                data
                                    .filter(item => {
                                        let result = _.get(item, dataXField, []);
                                        result = Array.isArray(result)
                                            ? result.map(elem => _.get(elem, dataXFieldProperty, elem))
                                            : result;
                                        return result.includes(arrayValue);
                                    })
                                    .map(item => {
                                        const result = _.get(item, dataYField, []);
                                        return Array.isArray(result)
                                            ? result.map(elem => _.get(elem, dataYFieldProperty, elem))
                                            : result;
                                    })
                            ),
                        }));
                    }
                } else {
                    const groupByValues = [
                        ...new Set(
                            data
                                .map(item => {
                                    const result = _.get(item, groupBy, []);
                                    return Array.isArray(result)
                                        ? result.map(elem => _.get(elem, groupByProperty, elem))
                                        : result;
                                })
                                .flat()
                        ),
                    ];
                    const t = [
                        ...new Set(
                            data
                                .map(item => {
                                    const result = _.get(item, dataXField, []);
                                    return Array.isArray(result)
                                        ? result.map(elem => _.get(elem, dataXFieldProperty, elem))
                                        : result;
                                })
                                .flat()
                        ),
                    ];
                    datasets = groupByValues.map((groupByValue, index) => ({
                        label: groupByValue,
                        backgroundColor: colors[index % colors.length],
                        data: t.map(elem => ({
                            x: elem,
                            y: this.aggregate(
                                aggregate,
                                data
                                    .filter(item => {
                                        const currentDataXFieldValue = _.get(item, dataXField);
                                        const currentGroupByValue = _.get(item, groupBy);
                                        return (
                                            (Array.isArray(currentDataXFieldValue)
                                                ? currentDataXFieldValue
                                                      .map(elem => _.get(elem, dataXFieldProperty, elem))
                                                      .includes(elem)
                                                : currentDataXFieldValue === elem) &&
                                            (Array.isArray(currentGroupByValue)
                                                ? currentGroupByValue
                                                      .map(elem => _.get(elem, groupByProperty, elem))
                                                      .includes(groupByValue)
                                                : currentGroupByValue === groupByValue)
                                        );
                                    })
                                    .map(item => {
                                        const result = _.get(item, dataYField);
                                        return Array.isArray(result)
                                            ? result.map(elem => _.get(elem, dataYFieldProperty, elem))
                                            : result;
                                    })
                            ),
                        })),
                    }));
                }

                // Empty values
                if (this.content.dataXEmpty === false) {
                    for (const item of datasets) {
                        item.data = item.data.filter(item => item.y && item.x);
                    }
                }
                // Change axis
                if (this.content.axis === 'y') {
                    for (const item of datasets) {
                        item.data = item.data.map(item => ({ x: item.y, y: item.x }));
                    }
                }
                // Order by
                for (const item of datasets) {
                    item.data.sort((a, b) => {
                        const field = this.content.dataOrderBy;
                        return (
                            (typeof a[field] === 'string' ? a[field].localeCompare(b[field]) : a[field] - b[field]) *
                            (this.content.dataDirection === 'DESC' ? -1 : 1)
                        );
                    });
                    item.data = item.data.map(item => ({ x: `${item.x}`, y: item.y }));
                }
            } else {
                labels = this.content.labels;
                datasets = this.content.datasets;
            }

            return {
                type: 'bar',
                data: {
                    labels,
                    datasets,
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
                            beginAtZero: this.content.startAtZero,
                        },
                    },
                },
            };
        },
    },
    watch: {
        config() {
            // if (
            //     this.chartInstance &&
            //     this.content.labels &&
            //     this.content.labels.length &&
            //     this.content.datasets &&
            //     this.content.datasets.length
            // ) {
            //     this.chartInstance.data.labels = this.content.labels;
            //     this.chartInstance.data.datasets = this.content.datasets;
            //     this.chartInstance.update();
            // }
            // this.chartInstance.data.labels = this.config.data.labels;
            // this.chartInstance.data.datasets = this.config.data.datasets;
            // this.chartInstance.update();
        },
        'config.data.datasets'() {
            this.chartInstance.data.datasets = this.config.data.datasets;
            if (this.chartInstance) this.chartInstance.destroy();
            this.initChart();
            this.chartInstance.update();
        },
        'config.data.labels'() {
            this.chartInstance.data.labels = this.config.data.labels;
            this.chartInstance.update();
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
        'content.startAtZero'() {
            if (this.chartInstance) this.chartInstance.destroy();
            this.initChart();
        },
        'content.dataYField'() {
            // eslint-disable-next-line vue/require-explicit-emits
            this.$emit('update:content:effect', { dataYFieldProperty: null });
        },
        'content.dataXField'() {
            // eslint-disable-next-line vue/require-explicit-emits
            this.$emit('update:content:effect', { dataXFieldProperty: null });
        },
        'content.groupBy'() {
            // eslint-disable-next-line vue/require-explicit-emits
            this.$emit('update:content:effect', { groupByProperty: null });
        },
    },
    mounted() {
        this.initChart();
    },
    beforeUnmount() {
        this.chartInstance.destroy();
    },
    methods: {
        aggregate(operator, data) {
            if (!data) return undefined;
            switch (operator) {
                case 'record-count':
                    return [data].flat().length;
                case 'distinct':
                    return [...new Set([data].flat())].length;
                case 'sum':
                    return this.sum([data].flat());
                case 'average':
                    return this.average([data].flat());
                case 'median':
                    return this.median([data].flat());
                case 'min':
                    return Math.min(...[data].flat());
                case 'max':
                    return Math.max(...[data].flat());
            }
        },
        initChart() {
            const element = this.$el.querySelector('.chartjs-bar');
            this.chartInstance = new Chart(element, this.config);
        },
        median(arr) {
            const mid = Math.floor(arr.length / 2),
                nums = [...arr].sort((a, b) => a - b);
            return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
        },
        sum(arr) {
            return arr.reduce((a, b) => a + b, 0);
        },
        average(arr) {
            return arr.reduce((a, b) => a + b, 0) / arr.length;
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
