import { combineReducers } from "redux";   //combine all reducres
import AllPostReducer from "./AllPostReducer"
import ReducerSelectedPost from "./ReducerSelectedPost";

const rootReducer  = combineReducers({
    allPosts:AllPostReducer,
    selectedPost:ReducerSelectedPost
})


export default rootReducer


