import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import counterSlice from "../Slice/counter.slice";
import categorySlice from "../Slice/category.slice";
import subcategorySlice from "../Slice/subcategory.slice";

export const rootReducer = combineReducers ({
        count : counterSlice,
        category : categorySlice,
        subcategory :  subcategorySlice
})