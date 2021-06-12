import { BUY_ICECREAM } from "./IceCreamType";

export const buyIceCream = (number) => {
    return {
        type: BUY_ICECREAM,
        payload: number
    }
}