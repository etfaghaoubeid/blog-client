import { BASE_URL } from "../../constants/api"
import { FETCHING_POSTS_FAIL, FETCHING_POSTS_SUCCESS, START_FETCHING_POSTS } from "./posts-action-types"

export function getPosts() {
    return async dispatch => {
        dispatch({
            type: START_FETCHING_POSTS,
            payload: {
                isLoading: true
            }
        })
        try {
            const res = await fetch(`${BASE_URL}/posts`);
            const posts = await res.json();
            console.log("posts", posts)
            return dispatch(
                {
                    type: FETCHING_POSTS_SUCCESS,
                    payload: {
                        posts,
                        isLoading: false
                    },

                }
            )
        } catch (error) {
            return dispatch({
                type: FETCHING_POSTS_FAIL,
                payload: {
                    isLoading: false,
                    error: error.message
                }
            })
        }
    }
}