import {combineReducers} from "redux";
import searchReducer from "./search.duck";


export const reducer = combineReducers({
    search: searchReducer,
    //post: postReducer
});