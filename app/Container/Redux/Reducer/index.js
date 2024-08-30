import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import counterSlice from "../Slice/counter.slice";
import categorySlice from "../Slice/category.slice";
import subcategorySlice from "../Slice/subcategory.slice";

import ShoppingSlice from "../Slice/Shopping.slice";
import ProductSlice from "../Slice/Product.slice";

import BrandSlice from "../Slice/Brand.Slice";
import ColorSlice from "../Slice/Color.Slice";
import FavouriteSlice from "../Slice/Favourite.Slice";
import CartSlice from "../Slice/Cart.Slice";
import AddressSlice from "../Slice/Address.Slice";


export const rootReducer = combineReducers ({
        count : counterSlice,
        category : categorySlice,
        subcategory :  subcategorySlice,
        Product : ProductSlice,
        shopping : ShoppingSlice,
        Color : ColorSlice,
        Brand : BrandSlice,
        togglefavourite: FavouriteSlice,
        cart : CartSlice,
        address : AddressSlice
})