import { types } from "../../types/types"


export const startAddEmployee = (employee) => {
    return (dispatch) => {

        const idNewEmployee = 'E3L7RK90G5040N0RL';

        //for test
        const comuna = 'comuna 5';
        const region = 'region 5';

        const newEmployee = {
            key: idNewEmployee,
            uid: idNewEmployee,
            dob: Date(employee.dob),
            address:{
                streetName: employee.streetName,
                comuna: comuna,
                region: region,
            },
            heathCoverage: 'Fonasa',
            pensionSystem: 'Modelo',
            nationality: 'Chilena',
            personalContact: '85729456',
            emergencyContact: '93847134',
            siteTag: [],
            ...employee
        }

        console.log(newEmployee);

        // dispatch(AddEmployee(newEmployee));
    }
}

export const AddEmployee = (employee) => ({
    type: types.employeeAdd,
    payload: employee
})