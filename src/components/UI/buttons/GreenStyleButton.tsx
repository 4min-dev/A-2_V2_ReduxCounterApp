import React from 'react'
import '../../../style/css/UI/buttons/greenStyleButton.css'
import { CustomButton } from './CustomButton'
import { ICustomButton } from '../../../ts/interfaces/customButton/ICustomButton'

export const GreenStyleButton:React.FC<ICustomButton> = ({disabled,handleClick,buttonText}) => {
  return (
    <CustomButton disabled={disabled} handleClick={handleClick} buttonText={buttonText} id={'grn_style_btn'}/>
  )
}