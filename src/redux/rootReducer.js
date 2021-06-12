import { combineReducers } from "redux";
import { cakeReducer } from "./cake/CakeReducer";
import { iceCreamReducer } from "./icecream/IceCreamReducer";

export const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : iceCreamReducer
})