import { TActionBankCounterType, actionBankCounterTypes } from "../action-types/actionBankCounterTypes"


type TBankCounterReducerDefaultState = {
    cash:number,
    error:string | null
}

const defaultState:TBankCounterReducerDefaultState = { cash:0, error:null }

export const bankCounterReducer = (state = defaultState,action:TActionBankCounterType) => {
    switch(action.type) {
        case actionBankCounterTypes.ADD_CASH_SUCCESS: return {...state, cash: state.cash += action.payload, error:null}
        case actionBankCounterTypes.ERROR: return {...state, error:action.error}
        case actionBankCounterTypes.GET_CASH_SUCCESS: return action.payload >= state.cash ? {...state, cash:0, error: null} : {...state, cash: state.cash -= action.payload, error: null}

        default: return state
    }
}