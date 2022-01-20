import { types } from "../../types/types";

const initialState = [
    {
        // key: '3af23f23ffn5ing0f',
        uid: '3af23f23ffn5ing0f',
        names: 'Andrián Roberto',
        lastNames: 'Martinex Lara',
        rutId: '22.334.334-1',
        dob: new Date("Wed Jan 07 2004 22:00:55 GMT-0300 (Chile Summer Time)").toString(),
        address: {
            streetName: 'Av. Mata 8733',
            comuna: 'Santiago',
            region: 'Santiago'
        },
        maritalStatus: 'Casado',
        heathCoverage: 'Fonasa',
        pensionSystem: 'Modelo',
        nationality: 'Chilena',
        personalContact: '85729456',
        emergencyContact: '93847134',
        siteTag: ['Cine Mall Plaza Oeste']
    },
    {
        // key: '343wkmf3i3fn5ing0f',
        uid: '343wkmf3i3fn5ing0f',
        names: 'Le Pipo',
        lastNames: 'Ramirez Figueroa',
        rutId: '12.345.678-9',
        dob: new Date("Wed May 14 1980 22:02:48 GMT-0400 (Chile Standard Time)").toString(),
        address: {
            streetName: 'Pje Las Calilas 123-A',
            comuna: 'San Bernardo',
            region: 'Santiago'
        },
        maritalStatus: 'Soltero',
        heathCoverage: 'Fonasa',
        pensionSystem: 'Plan Vital',
        nationality: 'Chilena',
        personalContact: '85452558',
        emergencyContact: '85371515',
        siteTag: ['Cine Mall Plaza Oeste', 'Adicionales Lo Vial 2']
    },
]

export const employeesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.employeeAdd:
            return [
                ...state, 
                action.payload
            ]

        
        default:
            return state;
    }
}
