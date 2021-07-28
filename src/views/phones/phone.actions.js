import { BASE_URL } from "../../constants/api";
import { FETCHING_PHONE_FAIL, FETCHING_PHONE_SUCCESS, START_FETCHING_PHONE } from "./phone.types"

export function getPhones(){
    return async function(dispatch){
       dispatch({
           type:START_FETCHING_PHONE,
           payload:{
               isLoading:true,
           }
       });

       try {
           const data = await fetch(`${BASE_URL}/phones`)
           const response = await data.json()
           return dispatch({
               type:FETCHING_PHONE_SUCCESS,
               payload:{
                   phones:response.phones, 
                   successMessage:response.message,
                   isLoading:false
               }
           })
           
       } catch (error) {
           return dispatch({
               type:FETCHING_PHONE_FAIL,
               payload:{
                   isLoading:false,
                   errorMessage:error.message
               }
           })
       }
    }
}