import axios from "axios"
import { Dispatch } from "redux"
import { IUser } from "../../../ts/interfaces/users/IUser"
import { TUserAction, actionTypes } from "../action-types/actionUserTypes"

export const fetchUsers = () => {
    return async(dispatch:Dispatch<TUserAction>) => {
        try {
            dispatch({type:actionTypes.USERS_LOADER,loader:true})
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users').then(res => res.data)
            dispatch({type:actionTypes.ADD_USERS_SUCCESS,usersload:response})
        } catch(err:any) {
            dispatch({type:actionTypes.ADD_USERS_ERROR,error:String(err.message)})
        } finally {
            dispatch({type:actionTypes.USERS_LOADER,loader:false})
        }
    }
}