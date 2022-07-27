import { types } from "../../types/types";


const initialState = [
    {
        uid: '3949f0ndfffoom8f498f7nd',

        employeeUid: '3af23f23ffn5ing0f',
        siteUid: '897fj23ffn5ing0f',
        companyUid: '9f8f2h9382f239fn298f',

        jobTitle : 'Maestro Segunda',
        netIncome: '480000',
        initialDate: new Date("Wed Jan 07 2004 22:00:55 GMT-0300 (Chile Summer Time)").toString(),
        commuteCoverage: '0',
        lunchCoverage: '0'

    },
]

export const contractsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.contractAdd:
            return [
                ...state,
                action.payload
            ]
    
        default:
            return state;
    }

}