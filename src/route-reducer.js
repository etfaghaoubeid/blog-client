import { combineReducers } from "redux";
import postsReducer from "./views/posts/posts-reducer";
import signInReducer from "./views/signin/signin-reducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    auth: signInReducer

});
export default rootReducer;