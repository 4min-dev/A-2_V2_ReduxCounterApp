export enum actionBankCounterTypes {
    ADD_CASH_SUCCESS = 'ADD_CASH_SUCCESS',
    ERROR = 'ERROR',
    GET_CASH_SUCCESS = 'GET_CASH_SUCCESS',
    ASYNC_COUNTER_INCR = 'ASYNC_COUNTER_INCR',
    ASYNC_COUNTER_DECR = 'ASYNC_COUNTER_DECR'
}

type TAddCashSuccess = {
    type:actionBankCounterTypes.ADD_CASH_SUCCESS,
    payload:number
}

type TError = {
    type:actionBankCounterTypes.ERROR,
    error:string
}

type TGetCashSuccess = {
    type:actionBankCounterTypes.GET_CASH_SUCCESS,
    payload:number
}

type TAsyncCounterIncr = {
    type:actionBankCounterTypes.ASYNC_COUNTER_INCR
}

type TAsyncCounterDecr = {
    type:actionBankCounterTypes.ASYNC_COUNTER_DECR
}

export type TActionBankCounterType = TAddCashSuccess | TError | TGetCashSuccess | TAsyncCounterIncr | TAsyncCounterDecr