export default {
    editor: {
        label: {
            fr: 'Chart - Bar',
            en: 'Chart - Bar',
        },
        icon: 'fontawesome/regular/chart-bar',
    },
    properties: {
        legendPosition: {
            label: {
                en: 'Legend position',
                fr: 'Legend position',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'top', label: { en: 'Top' } },
                    { value: 'bottom', label: { en: 'Bottom' } },
                    { value: 'left', label: { en: 'Left' } },
                    { value: 'right', label: { en: 'Right' } },
                ],
            },
            bindable: true,
            responsive: true,
            defaultValue: 'top',
        },
        legendAlignement: {
            label: {
                en: 'Legend alignement',
                fr: 'Legend alignement',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'start', label: { en: 'Start' } },
                    { value: 'center', label: { en: 'Center' } },
                    { value: 'end', label: { en: 'End' } },
                ],
            },
            bindable: true,
            responsive: true,
            defaultValue: 'center',
        },
        axis: {
            label: { en: 'Axis', fr: 'Axis' },
            type: 'BigIconRadioGroup',
            options: {
                choices: [
                    { icon: 'align-bottom', value: 'x', label: 'X' },
                    { icon: 'align-left', value: 'y', label: 'Y' },
                ],
            },
            bindable: true,
            responsive: true,
            defaultValue: 'x',
        },
        stacked: {
            type: 'OnOff',
            label: {
                en: 'Stacked bars',
                fr: 'Stacked bars',
            },
            bindable: true,
            responsive: true,
            defaultValue: false,
        },
        labels: {
            label: {
                en: 'Labels',
                fr: 'Labels',
            },
            type: 'Info',
            options: {
                text: { en: 'Chart labels' },
            },
            responsive: true,
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
            responsive: true,
            section: 'settings',
            bindable: 'list',
            defaultValue: [
                {
                    label: 'Millenium Falcon',
                    backgroundColor: 'rgb(255, 99, 132)',
                    data: [100.0, 5.0, 2.0, 20.0, 30.0, 10.0, 45.0],
                },
                {
                    label: 'TIE Fighter',
                    backgroundColor: '#F7AB49',
                    data: [26, 42, 35, 48, 52, 24, 75],
                },
            ],
        },
    },
};
