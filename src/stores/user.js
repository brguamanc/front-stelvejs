import { writable, Writable } from "svelte/store";

const createUser =()=>{
    const {subscribe,set}=writable(null)
    return{
        subscribe,
        set:(user)=>{
            set(user)
        }
    }
}

export const user = createUser()