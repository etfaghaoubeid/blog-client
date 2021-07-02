import { FETCHING_POSTS_SUCCESS, START_FETCHING_POSTS } from "./posts-action-types";

export default function postsReducer(state = { posts: [] }, action) {
    switch (action?.type) {
        case START_FETCHING_POSTS:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case FETCHING_POSTS_SUCCESS:
            return {
                ...state,
                posts: [...state.posts, ...action.payload.posts]
            }
        default:
            return state;
    }
}