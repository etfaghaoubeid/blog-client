import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./route-reducer";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
const middleares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleares)));
export default store