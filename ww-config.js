export default {
    editor: {
        label: {
            fr: 'Chartjs - Bar',
            en: 'Chartjs - Bar',
        },
    },
    properties: {
        labels: {
            label: {
                en: 'Labels',
                fr: 'Labels',
            },
            type: 'Info',
            options: {
                text: { en: 'Chart labels' },
            },
            section: 'settings',
            bindable: 'list',
            defaultValue: ['Tatooine', 'Coruscant', 'Kashyyyk', 'Dagobah', 'Bespin', 'Endor', 'Hoth'],
        },
        datasets: {
            label: {
                en: 'Datasets',
                fr: 'Datasets',
            },
            type: 'Info',
            options: {
                text: { en: 'Chart Datasets' },
            },
            section: 'settings',
            bindable: 'list',
            defaultValue: [
                {
                    label: 'Millenium Falcon',
                    backgroundColor: 'rgb(255, 99, 132)',
                    data: [100.0, 5.0, 2.0, 20.0, 30.0, 10.0, 45.0],
                },
            ],
        },
    },
};
