export interface ICustomButton {
    id?:string,
    buttonText?:string,
    handleClick:() => void,
    disabled?:boolean
}