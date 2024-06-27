import React from 'react'

type TLabel = {
    labelFor:string,
    labelId?:string,
    labelText?:string,
}

export const Label:React.FC<TLabel> = ({labelFor,labelId,labelText}) => {
    return(
        <label htmlFor={labelFor} id={labelId}>
            {labelText}
        </label>
    )
}