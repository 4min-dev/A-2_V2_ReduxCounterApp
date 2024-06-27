import { IUser } from "./IUser";

export interface IUsersAction {
    type:string,
    usersload:IUser[],
    userload:IUser,
    userload_id:number,
    loader:boolean,
    error:string | null
}