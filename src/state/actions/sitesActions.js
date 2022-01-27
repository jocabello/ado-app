import { types } from "../../types/types";


export const startAddSite = (site) => {
    return (dispatch) => {

        const idNewSite = 'MR8K8N4334P689F'

        const newSite = {
            // key: idNewSite,
            uid: idNewSite,
            name: site.name,
            description: site.description,
            address: {
                streetName: site.streetName,
                comuna: site.comuna,
                region: site.region
            },
            companyTag: site.companyTag? site.companyTag: []
        }

        // console.log(newSite);

        dispatch(addSite(newSite));
    }
}

const addSite = (site) => ({
    type: types.sitesAdd,
    payload: site
})