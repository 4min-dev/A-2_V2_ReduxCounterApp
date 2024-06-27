import { IUser } from "../../../ts/interfaces/users/IUser"
import { actionTypes, TUserAction } from "../action-types/actionUserTypes"

type TUsersReducerDefaultState = {
    users:IUser[],
    isLoading:boolean | null,
    error:string | null
}

const defaultState:TUsersReducerDefaultState = { users:[], isLoading:null, error:null}

export const userReducer = (state = defaultState,action:TUserAction) => {
    switch(action.type) {
        case actionTypes.USERS_LOADER: return {...state, isLoading:action.loader}
        case actionTypes.ADD_USERS_SUCCESS: return {...state, users:[...state.users, ...action.usersload]}
        case actionTypes.ADD_USERS_ERROR: return {...state, error:`Error - ${action.error}`}
        case actionTypes.ADD_USER: return {...state, users:[...state.users, action.userload]}
        case actionTypes.GET_USERS: return {...state, users:[]}
        case actionTypes.GET_USER: return {...state, users:[...state.users.filter((user:IUser) => user.id !== action.userload_id)]}

        default: return state
    }
}