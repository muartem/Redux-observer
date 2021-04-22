import {combineReducers} from "redux";
import searchReducer from "./post.duck";


export const reducer = combineReducers({
    search: searchReducer,
    //post: postReducer
});