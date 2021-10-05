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
            bindable: 'list',
            defaultValue: [
                {
                    label: 'Millenium Falcon',
                    backgroundColor: 'rgb(255, 99, 132)',
                    data: [100.0, 5.0, 2.0, 20.0, 30.0, 10.0, 45.0],
                },
            ],
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
