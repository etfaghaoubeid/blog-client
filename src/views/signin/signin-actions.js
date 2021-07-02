import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_START, SIGNUP_SUCCESS } from "./signin-actions-types"
import { BASE_URL } from "../../constants/api"
export function signInAction(user) {
    return async dispatch => {
        dispatch({
            type: LOGIN_START,
            payload: {
                isLoding: true,
            }
        });
        try {
            const res = await fetch(`${BASE_URL}/auth/login `, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const authanticatedUser = await res.json()
            console.log("authanticatedUser", authanticatedUser)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    user: authanticatedUser,
                    isLoding: false
                }
            })
        } catch (error) {
            dispatch({
                type: LOGIN_FAIL,
                payload: {
                    isLoding: false
                }
            })
        }

    }
}


export function signUpAction(user) {
    return async dispatch => {
        dispatch({
            type: SIGNUP_START,
            payload: {
                isLoding: true,
            }
        });
        try {
            const res = await fetch(`${BASE_URL}/auth/sign-up `, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const savedUser = await res.json()
            console.log("savedUser", savedUser)
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: {
                    user: savedUser,
                    isLoding: false
                }
            })
        } catch (error) {
            dispatch({
                type: SIGNUP_FAIL,
                payload: {
                    isLoding: false
                }
            })
        }

    }
}