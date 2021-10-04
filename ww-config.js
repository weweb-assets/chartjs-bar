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
            section: 'settings',
            bindable: 'repeatable',
            defaultValue: [],
        },
        // labelField: {
        //     label: { en: 'Label field', fr: 'Label field' },
        //     type: 'Text',
        //     options: {
        //         placeholder: 'Label field',
        //     },
        //     section: 'settings',
        //     defaultValue: 'Label',
        // },
        // backgroundColorField: {
        //     label: { en: 'Color field', fr: 'Color field' },
        //     type: 'Text',
        //     options: {
        //         placeholder: 'Color field',
        //     },
        //     section: 'settings',
        //     defaultValue: 'Color',
        // },
        // dataField: {
        //     label: { en: 'Data field', fr: 'Data field' },
        //     type: 'Text',
        //     options: {
        //         placeholder: 'Data field',
        //     },
        //     section: 'settings',
        //     defaultValue: 'Data',
        // },
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
            bindable: 'repeatable',
            defaultValue: [],
        },
        reload: {
            type: 'Button',
            label: null,
            options: {
                text: {
                    en: 'Draw',
                },
                action: 'reload',
            },
            section: 'settings',
        },
    },
};
