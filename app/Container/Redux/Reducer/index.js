import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import counterSlice from "../Slice/counter.slice";
import categorySlice from "../Slice/category.slice";

export const rootReducer = combineReducers ({
        count : counterSlice,
        category : categorySlice
})