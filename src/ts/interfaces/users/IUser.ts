import { IUserAddress } from "./IUserAddress";
import { IUserCompany } from "./IUserCompany";

export interface IUser {
    id:number,
    name:string,
    username:string,
    email:string,
    phone:number | string,
    address:IUserAddress,
    company:IUserCompany
}