import { types } from "../../types/types"


export const startAddEmployee = (employee) => {
    return (dispatch) => {

        const idNewEmployee = 'E3L7RK90G5040N0RL';

        //for test
        const comuna = 'comuna 5';
        const region = 'region 5';

        const newEmployee = {
            ...employee,
            key: idNewEmployee,
            uid: idNewEmployee,
            dob: employee.dob._d.toString(),
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
            siteTag: []
        }

        console.log(newEmployee);

        dispatch(AddEmployee(newEmployee));
    }
}

const AddEmployee = (employee) => ({
    type: types.employeeAdd,
    payload: employee
})