import { BASE_URL } from "../../constants/api"
import { FETCHING_ACCESSORIES_FAIL, FETCHING_ACCESSORIES_SUCCESS, START_FETCHING_ACCESSORIES } from "./accessories.actions.types"

export function getAccessories(){
    return async function(dispatch){

        dispatch({
            type:START_FETCHING_ACCESSORIES,
            payload:{
                isLoading:true
            }
        })

        const res = await fetch(`${BASE_URL}/accessories`);
        const accessories = await res.json();
        if(accessories){
            return dispatch({
                type:FETCHING_ACCESSORIES_SUCCESS,
                payload:{
                    isLoading:false,
                    accessories,
                }
            })
        }
        
        return dispatch({
            type:FETCHING_ACCESSORIES_FAIL,
            payload:{
                isLoading:false,
                errorMessage:"Something went wrong"
            }
        })

    }
}