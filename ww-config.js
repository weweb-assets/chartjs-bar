export default {
    editor: {
        label: {
            fr: 'Base',
            en: 'Base',
        },
    },
    properties: {
        datasets: {
            label: {
                en: 'Datasets',
                fr: 'Datasets',
            },
            type: 'Info',
            options: {
                text: { en: 'Datasets' },
            },
            bindable: 'repeatable',
            defaultValue: [],
        },
        label: {
            label: { en: 'Label', fr: 'Label' },
            type: 'Info',
            options: {
                text: 'Label',
            },
            bindable: true,
        },
        backgroundColor: {
            label: { en: 'Background color', fr: 'Background color' },
            type: 'Info',
            options: {
                text: 'rgb(255, 99, 132)',
            },
            bindable: true,
        },
        borderColor: {
            label: { en: 'Border color', fr: 'Border color' },
            type: 'Info',
            options: {
                text: 'rgb(255, 99, 132)',
            },
            bindable: true,
        },
        data: {
            label: {
                en: 'Data',
                fr: 'Data',
            },
            type: 'Info',
            options: {
                text: { en: 'Data set' },
            },
            bindable: true,
            defaultValue: [],
        },
    },
};
