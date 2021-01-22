const db = {
    accounts: [],
    insitutions: [],
}

const sampleData = {
    accounts: [
        {
            id: 'f1bd0dac-b780-447c-9685-2d92ebb450ea',
            state: 'active',
            type: 'current',
            name: 'Revolut',
            currency: 'GBP',
            'current-balance': 500,
            'institution': '56848580-a459-488b-8609-ef7f24017e82',
        },
        {
            id: '7d362de7-9f19-4e5e-af9d-f7e951f1f177',
            state: 'active',
            type: 'current',
            name: 'Revolut',
            currency: 'USD',
            'current-balance': 82.23,
            'institution': '56848580-a459-488b-8609-ef7f24017e82',
        },
        {
            id: '2c024d13-cc31-45b4-a4aa-a1daa789d7b5',
            state: 'active',
            type: 'savings',
            name: 'Revolut',
            currency: 'GBP',
            'current-balance': 1000,
            'institution': '56848580-a459-488b-8609-ef7f24017e82',
        },
        {
            id: '94dddc55-b882-4f84-9045-b2474306a4f0',
            state: 'active',
            type: 'trading',
            name: 'Freetrade',
            currency: 'GBP',
            'current-balance': 2000,
            'institution': '7b9e8c3f-fbc9-46a9-b903-91ed0a3a6591',
        },
        {
            id: '8903e032-5ba5-496c-a26c-889f120a1c5e',
            state: 'active',
            type: 'current',
            name: 'Alfa-Bank',
            currency: 'RUB',
            'current-balance': 10000.23,
            'institution': 'b002d48e-35ee-4201-8a7f-527cdd6da3b8',
        },
        {
            id: 'e658a966-f662-4801-b7fa-13f1657d6c18',
            state: 'active',
            type: 'savings',
            name: 'Alfa-Bank',
            currency: 'USD',
            'current-balance': 674.52,
            'institution': 'b002d48e-35ee-4201-8a7f-527cdd6da3b8',
        },
    ],
    institutions: [
        { id: '9795665e-341c-4edf-825e-50d7a97219d2', 'name': 'Revolut' },
        { id: '59494a30-176e-4853-af52-bb17b6becfde', 'name': 'Monzo' },
        { id: 'a9f7912d-0bd8-4af3-a4b2-16a08ec5b28d', 'name': 'Freetrade' },
        { id: '279dfe16-7b0e-454c-8752-d271bfd78a74', 'name': 'Alfa-Bank' },
    ],
}

export const getDatabase = () => {
    const accounts = localStorage.getItem('db.accounts')
    const institutions = localStorage.getItem('db.institutions')
    db.accounts = accounts ? JSON.parse(accounts) : sampleData.accounts
    db.insitutions = institutions ? JSON.parse(institutions) : sampleData.institutions
}

export default db
