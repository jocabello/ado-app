import { types } from "../../types/types";


const initialState = [
    {
        uid: '9f8f2h9382f239fn298f',
        name: 'Patagonia',
        rutId: '76288461-9',
        description: '',
        address: {
            streetName: 'Holanda 12',
            comuna: 'Providencia',
            region: 'Santiago'
        }
    },
]

export const companiesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.companyAdd:
            return [
                ...state,
                action.payload
            ]
    
        default:
            return state;
    }
}