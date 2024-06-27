import { IUser } from "../../../ts/interfaces/users/IUser"

export enum actionTypes {
    USERS_LOADER = 'USERS_LOADER',
    ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS',
    ADD_USERS_ERROR = 'ADD_USERS_ERROR',
    ADD_USER = 'ADD_USER',
    GET_USERS = 'GET_USERS',
    GET_USER = 'GET_USER'
}

type TUsersLoading = {
    type:actionTypes.USERS_LOADER,
    loader:boolean
}

type TAddUsersSuccess = {
    type:actionTypes.ADD_USERS_SUCCESS,
    usersload:IUser[]
}

type TAddUsersError = {
    type:actionTypes.ADD_USERS_ERROR,
    error:string
}

type TAddUser = {
    type:actionTypes.ADD_USER,
    userload:IUser
}

type TGetUsers = {
    type:actionTypes.GET_USERS,
}

type TGetUser = {
    type:actionTypes.GET_USER,
    userload_id:number
}

export type TUserAction = TUsersLoading | TAddUsersSuccess | TAddUsersError | TAddUser | TGetUsers | TGetUser