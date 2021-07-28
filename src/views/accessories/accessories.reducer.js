import { FETCHING_ACCESSORIES_FAIL, FETCHING_ACCESSORIES_SUCCESS, START_FETCHING_ACCESSORIES } from "./accessories.actions.types";

export default function accessoriesReducer(state={}, action){
    switch(action.type){
        case START_FETCHING_ACCESSORIES:
            return{
                ...state, 
                isLoading:action.payload.isLoading,
            }
        case FETCHING_ACCESSORIES_SUCCESS:
            return{
                ...state,
                isLoading:action.payload.isLoading,
                accessories:action.payload.accessories
            }  
            
        case FETCHING_ACCESSORIES_FAIL:
            return{
                ...state, 
                isLoading:action.payload.isLoading,
                erroMessage:action.payload.erroMessage
            }    
        default:
            return state;
    }

}