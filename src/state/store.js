import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { companiesReducer } from './reducer/companiesReducer'
import { contractsReducer } from './reducer/contractsReducer'
import { employeesReducer } from './reducer/employeesReducer'
import { sitesReducer } from './reducer/sitesReducer'


const reducers = combineReducers({
    employees: employeesReducer,
    sites: sitesReducer,
    companies: companiesReducer,
    contracts: contractsReducer
})

export default configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})