import React from 'react'
import '../../../style/css/pages/homePage/homePageMainCounterInterface.css'
import { HomePageCounterCheckbox } from './HomePageCounterCheckbox'
import { useDispatch } from 'react-redux'
import { GreenStyleButton } from '../buttons/GreenStyleButton'
import { useTypedSelectorStates } from '../../../hooks/useTypedSelectorStates'
import { actionBankCounterTypes } from '../../../redux/store/action-types/actionBankCounterTypes'

type TCounterProps = {
    totalCash:number
}

export const HomePageMainCounterInterface:React.FC<TCounterProps> = ({totalCash}) => {

  const selector = useTypedSelectorStates(state => state.counterDelayReducer)
  const dispatch = useDispatch()

  const getCounterValue = (promptTitle:string):number | null => {
    let payload:number = Number(prompt(promptTitle))

    if(isNaN(payload)) {
      dispatch({type:actionBankCounterTypes.ERROR,error:'Not a number'})
      return null
    }
    
    return payload

}

  const incrHandler = () => {

    let payload:number | null = getCounterValue('+ value')

    if(payload !== null && payload > 0) {
      dispatch({type:actionBankCounterTypes.ADD_CASH_SUCCESS,payload:payload})
    } else {
      dispatch({type:actionBankCounterTypes.ERROR,error:'Increment value cannot be less 0'})
    }
  }

  const decrHandler = () => {

    let payload:number | null = getCounterValue('- value')

   if(payload !== null && payload > 0) {
      dispatch({type:actionBankCounterTypes.GET_CASH_SUCCESS,payload:payload})
   } else {
      dispatch({type:actionBankCounterTypes.ERROR,error:'Decrement value cannot be less 0'})
   }
  }

  const asyncHandlerIncrement = () => dispatch({type:'ASYNC_COUNTER_INCR'})
  const asyncHandlerDecrement = () => dispatch({type:'ASYNC_COUNTER_DECR'})

  return (
    <div className='homePageCounterUI'>
      <GreenStyleButton handleClick={() => !selector.checkboxValue ? incrHandler() : asyncHandlerIncrement()} buttonText={'+'}/>
      <HomePageCounterCheckbox delayValue={selector.delay} checkboxValue={selector.checkboxValue}/>
      <GreenStyleButton disabled={totalCash <= 0} handleClick={() => !selector.checkboxValue ? decrHandler() : asyncHandlerDecrement()} buttonText={'-'}/>
    </div>
  )
}