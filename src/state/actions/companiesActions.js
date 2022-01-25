import { types } from "../../types/types";


export const startAddCompany = (company) => {
    return (dispatch) => {

        const idNewCompany = '4f984fn298vhdfi'

        const newCompany = {
            uid: idNewCompany,
            name: company.name,
            rutId: company.rutId,
            description: company.description,
            address: {
                streetName: company.streetName,
                comuna: company.comuna,
                region: company.region
            }
        }

        dispatch(addCompany(newCompany));

    }
}

const addCompany = (company) => ({
    type: types.companyAdd,
    payload: company
})