import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL } from "./signin-actions-types"
export default function signInReducer(action, state) {
    switch (action?.type) {
        case LOGIN_START:
        case SIGNUP_START:
            return {
                ...state,
                isLoading: action.payload.isLoading
            };
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.payload.user
            };
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
            return {
                ...state,
                errorMessage: "Login Fail",
                isLoading: action.payload.isLoading
            }

        default:
            return state;
    }
}