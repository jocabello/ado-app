import { types } from "../../types/types"


export const startAddEmployee = (employee) => {
    return (dispatch) => {

        const idNewEmployee = 'E3L7RK90G5040N0RL';

        const newEmployee = {
            ...employee,
            // key: idNewEmployee,
            uid: idNewEmployee,
            dob: employee.dob._d.toString(),
            address:{
                streetName: employee.streetName,
                comuna: employee.comuna,
                region: employee.region,
            },
            heathCoverage: employee.heathCoverage,
            pensionSystem: employee.pensionSystem,
            nationality: employee.nationality,
            personalContact: employee.personalContact,
            emergencyContact: employee.emergencyContact,
            siteTag: employee.siteTag? employee.siteTag : []
        }

        // console.log(newEmployee);

        dispatch(AddEmployee(newEmployee));
    }
}

const AddEmployee = (employee) => ({
    type: types.employeeAdd,
    payload: employee
})