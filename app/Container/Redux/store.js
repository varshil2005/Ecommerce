import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./Reducer"
import { thunk } from "redux-thunk"

export const configurestore = () => {
    const store =  createStore (rootReducer ,applyMiddleware(thunk))
    return store
}