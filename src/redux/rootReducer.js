import { combineReducers  } from "redux";
import cakeReducer from "./cake/CakeReducer";
import iceCreamReducer from "./icecream/IceCreamReducerr";
const rootReducer =combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer
})

export default rootReducer