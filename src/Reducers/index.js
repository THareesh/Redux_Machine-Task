import {combineReducers} from 'redux'

import authReducer from './AuthReducer'

import employeeList from './EmployeeList'


export default combineReducers({
    auth:authReducer,
    employeeList

})
