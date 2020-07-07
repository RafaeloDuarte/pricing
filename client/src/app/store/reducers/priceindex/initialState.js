const INITIAL_STATE = {
    departament: 'Alim Basico Pesado',
    productType: 'Arroz',
    product: '',
    cluster: '',
    cities: [],
    data: [
        {
            title: "Arroz",
            preco: 'R$ 9,41',
            precoConcorrente: { precoA: "11,08", precoB: "", precoC: "" },
        },
        {
            title: "Arroz2",
            preco: 'R$ 9,41',
            precoConcorrente: { precoA: "8,08", precoB: "", precoC: "" }
        },
        {
            title: "Arroz3",
            preco: 'R$ 9,41',
            precoConcorrente: { precoA: "10,08", precoB: "", precoC: "" },
        },
        {
            title: "Arroz4",
            preco: 'R$ 9,41',
            precoConcorrente: { precoA: "6,08", precoB: "", precoC: "" }
        },
        {
            title: "Arroz5",
            precoSIT: 'R$ 9,41',
            precoConcorrente: { precoA: "9,08", precoB: "", precoC: "" }
        }
    ],
    initialDate: 'Data Inicial',
    finalDate: 'Data Final',
    dates:[],
    flagList:[]
};

export default INITIAL_STATE