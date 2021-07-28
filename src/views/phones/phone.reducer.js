import { FETCHING_PHONE_SUCCESS, START_FETCHING_PHONE ,FETCHING_PHONE_FAIL} from "./phone.types";

export default function phoneReducer(state={phones:[], isLoading:false}, action){
    switch(action.type){
        case START_FETCHING_PHONE:
            return {
                ...state, 
                isLoading:action.payload.isLoading
            }
        case FETCHING_PHONE_SUCCESS:
            return {
                ...state, 
                phones:action.payload.phones,
                isLoading:action.payload.isLoading,
                successMessage:action.payload.successMessage
            }   
        case FETCHING_PHONE_FAIL:
            return {
                ...state, 
                isLoading:action.payload.isLoading,
                errorMessage:action.payload.errorMessage
            }
            default :
                return state;
    }
}