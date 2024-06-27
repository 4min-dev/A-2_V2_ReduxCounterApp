import React, { MouseEvent } from 'react'
import '../../../style/css/UI/buttons/customButton.css'
import { ICustomButton } from '../../../ts/interfaces/customButton/ICustomButton'

export const CustomButton:React.FC<ICustomButton> = ({id,buttonText,handleClick,disabled}) => {

    function customBtnClickHandler(e:MouseEvent<HTMLButtonElement>,handler:() => void) {
        e.preventDefault()
        handler()
    }

  return (
    <button disabled={disabled} type='button' className='customButton' id={id} onClick={(e) => customBtnClickHandler(e,handleClick)}>
      {buttonText}
    </button>
  )
}