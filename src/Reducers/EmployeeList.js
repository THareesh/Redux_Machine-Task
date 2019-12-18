import employeeListData from '../data/employeelist.json'

import * as actionType from '../Actions/actionType'


const initialState = {
    employeelist:null
}


const employeelist = (state=initialState,action)=>{
   switch(action.type){
        case  actionType.GET_EMPLOYEE_LIST:
            return {
                employeelist: employeeListData
            }
            default :
            return state
   }


}
export default employeelist


