import { BUY_CAKE } from "./cakeTpes"

export const buyCake =(number=1)=> { // action creation (which is function containing action)
    return {
        type: BUY_CAKE,
        payload:number
    }
}