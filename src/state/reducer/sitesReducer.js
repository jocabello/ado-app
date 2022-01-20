import { types } from "../../types/types";

const initialState = [
    {
        // key: '897fj23ffn5ing0f',
        uid: '897fj23ffn5ing0f',
        name: 'Lo Vial',
        address: {
            streetName: 'Ejercito 931',
            comuna: 'Estación Central',
            region: 'Santiago'
        }
    },
    {
        // key: '3af23f23ffn5ing0f',
        uid: '3af23f23ffn5ing0f',
        name: 'Cine Paque Arauco',
        address: {
            streetName: 'Av. Pdte. Kennedy 5413',
            comuna: 'Las Condes',
            region: 'Santiago'
        }
    }
]

export const sitesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.sitesAdd:
            return [
                ...state, 
                action.payload
            ]

        
        default:
            return state;
    }
}