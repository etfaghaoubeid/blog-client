import { combineReducers } from "redux";
import accessoriesReducer from "./views/accessories/accessories.reducer";
import phoneReducer from "./views/phones/phone.reducer";
import postsReducer from "./views/posts/posts-reducer";
import signInReducer from "./views/signin/signin-reducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    auth: signInReducer,
    accessories:accessoriesReducer,
    phones:phoneReducer

});
export default rootReducer;