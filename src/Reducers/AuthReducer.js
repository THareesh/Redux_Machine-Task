import userDetails from '../data/login.json'
import * as actionTypes from '../Actions/actionType'



const initialState = {
    userName:userDetails.username,
    password:userDetails.password,
    redirect : false,
    auth : false,
    error : null
}


const authReducer = (state = initialState,action) =>{
    switch(action.type){
        case  actionTypes.Login:
            if ((state.userName === action.email) && (state.password === action.password)) {
                return {
                    ...state,
                    auth: true,
                    redirect:true,
                    error:null
                }
            } else {
                return {
                    ...state,
                    auth: false,
                    error: "Please enter valid Username and Password"
                }
            }

        default:
            return state

    }

}
export default authReducer
