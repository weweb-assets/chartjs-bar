export default {
    editor: {
        label: {
            fr: 'Base',
            en: 'Base',
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
            bindable: 'repeatable',
            defaultValue: [],
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
            bindable: 'repeatable',
            defaultValue: [],
        },
        reload: {
            type: 'Button',
            label: null,
            options: {
                text: {
                    en: 'Reload',
                },
                action: 'reload',
            },
        },
    },
};
