import { IUser } from "../users/IUser";

export interface IUserReducer {
    isLoading:boolean,
    error:string | null,
    users:IUser[]
}