import { combineReducers  } from "redux";
import cakeReducer from "./cake/CakeReducer";
import iceCreamReducer from "./icecream/IceCreamReducerr";
import userReducer from './user/userReducer'
const rootReducer =combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer,
    user: userReducer
})

export default rootReducer