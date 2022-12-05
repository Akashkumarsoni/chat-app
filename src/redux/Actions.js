import { SEND } from "./Constants"

export const send_action=(e)=>{
    return{
        type:SEND,
        payload:e
    }
}