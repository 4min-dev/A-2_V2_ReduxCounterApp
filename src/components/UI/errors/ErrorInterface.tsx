import React from 'react'
import '../../../style/css/UI/errors/errorInterface.css'
import '../../../style/css/UI/buttons/errorReloadButton.css'
import { GreenStyleButton } from '../buttons/GreenStyleButton'

type TErrorHandler = {
    error:string,
    canReload?:boolean
}

export const ErrorInterface:React.FC<TErrorHandler> = ({error,canReload}) => {

    const reloadPage = () => window.location.reload()

  return (
    <div className='errorInterface'>
      <h1>{error}</h1>
      {canReload && <GreenStyleButton handleClick={reloadPage} buttonText='Reload page'/>}
    </div>
  )
}