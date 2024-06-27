import React from 'react'
import { ICustomButton } from '../../../ts/interfaces/customButton/ICustomButton'
import { CustomButton } from './CustomButton'

export const DelayButton:React.FC<ICustomButton> = ({id, buttonText, handleClick}) => {
  return (
    <CustomButton id={id} buttonText={buttonText} handleClick={handleClick}/>
  )
}