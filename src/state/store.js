import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { employeesReducer } from './reducer/employeesReducer'


const reducers = combineReducers({
    employees: employeesReducer
})

export default configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})