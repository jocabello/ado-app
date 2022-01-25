import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { companiesReducer } from './reducer/companiesReducer'
import { employeesReducer } from './reducer/employeesReducer'
import { sitesReducer } from './reducer/sitesReducer'


const reducers = combineReducers({
    employees: employeesReducer,
    sites: sitesReducer,
    companies: companiesReducer
})

export default configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})