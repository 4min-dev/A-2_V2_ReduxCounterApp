import React from 'react'
import '../../../style/css/pages/homePage/homePageCounterCheckbox.css'
import { CustomCheckbox } from '../inputs/CustomCheckbox'
import { Label } from '../inputs/Label'
import { useDispatch } from 'react-redux'
import { DelayButton } from '../buttons/DelayButton'
import { IDelayValue } from '../../../ts/interfaces/global/delay/IDelayValue'
import { IDefaultDelayValues } from '../../../ts/interfaces/global/delay/IDefaultDelayValues'

export const HomePageCounterCheckbox:React.FC<IDelayValue> = ({delayValue,checkboxValue}) => {

    const dispatch = useDispatch()

    function counterDelay () {
      const defaultDelay:IDefaultDelayValues = {maxDelay:9999,minDelay:0}
      let delay = Number(prompt(`Set delay | No less ${defaultDelay.minDelay} and no more ${defaultDelay.maxDelay}`))

     if(!delay) {
        return delayValue
     } else if(delay < defaultDelay.minDelay) {
      console.log(`Value is not responding (No less ${defaultDelay.minDelay})`)
      return defaultDelay.minDelay
    } else if(delay > defaultDelay.maxDelay) {
      console.log(`Value is not responding (No more ${defaultDelay.maxDelay})`)
      return defaultDelay.maxDelay
    }
      return delay
  }

  const setDelay = () => dispatch({type:'SET_COUNTER_DELAY',delay:counterDelay()})

  return (
    <div className='homePageCounterCheckboxContainer'>
        <span>
            <CustomCheckbox id='customAsyncCheckbox' checkboxValue={checkboxValue}/>
            <Label labelFor='customAsyncCheckbox' labelText={`Async(${delayValue})`}/>
         </span>
        <DelayButton id='delayButton' buttonText='Delay' handleClick={setDelay}/>
    </div>
  )
}