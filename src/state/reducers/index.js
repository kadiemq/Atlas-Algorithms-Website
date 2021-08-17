import { combineReducers } from "redux"
import ReducerLoading from "./ReducerLoading";

const Reducers = combineReducers({
    loading: ReducerLoading
});

export default Reducers;