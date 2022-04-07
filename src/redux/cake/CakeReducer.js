import { BUY_CAKE } from "./cakeTpes";
const initialState = {
    numOfCakes:20
}
const cakeReducer = (state =initialState , action)=>{
    switch(action.type){
        case BUY_CAKE : 
        return {
            ...state , 
            numOfCakes:state.numOfCakes-1
        }
        default: return state
    }

}
export default cakeReducer;