import { types } from "../../types/types";

export const startAddContract = (contract) => {
    return (dispatch) => {

        const idNewContract = 'WRUGR9589H29BB4G5HJE';

        const newContract = {
            uid: idNewContract,

            employeeUid: contract.selectedEmployee,
            companyUid: contract.selectedCompany,
            siteUid: contract.selectedSite,
            
            jobTitle : contract.jobTitle,
            netIncome: contract.netIncome,
            initialDate: contract.initialDate._d.toString(),
            // initialDate: contract.dob,
            commuteCoverage: contract.commuteCoverage,
            lunchCoverage: contract.lunchCoverage,

        }
        
        console.log(newContract);
        dispatch(addContract(newContract));
    }
}


const addContract = (contract) => ({
    type: types.contractAdd,
    payload: contract
})

