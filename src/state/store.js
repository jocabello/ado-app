import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { employeesReducer } from './reducer/employeesReducer'
import { sitesReducer } from './reducer/sitesReducer'


const reducers = combineReducers({
    employees: employeesReducer,
    sites: sitesReducer
})

export default configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})