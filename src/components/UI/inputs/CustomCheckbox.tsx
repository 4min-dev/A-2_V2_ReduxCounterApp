import React from "react"
import { useDispatch } from "react-redux"

type TCustomCheckbox = {
    id?:string,
    children?:React.ReactNode,
    checkboxValue:boolean
}

export const CustomCheckbox:React.FC<TCustomCheckbox> = ({id,children,checkboxValue}) => {

    const dispatch = useDispatch()

    const setAsyncDelay = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type:'SET_COUNTER_DELAY_STATUS',checkboxValue:e.target.checked})
    }

    return(
        <input type='checkbox' id={id} checked={checkboxValue} onChange={(e) => setAsyncDelay(e)}>
            {children}
        </input>
    )
}