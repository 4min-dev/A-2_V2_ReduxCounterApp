import { delay, put, takeEvery } from "redux-saga/effects";
import { useTypedSelectorStatesSaga } from "../../hooks/useTypedSelectorStatesSaga";
import { actionBankCounterTypes } from "../../redux/store/action-types/actionBankCounterTypes";

function* getDelayValue() {
    const delay:number = yield useTypedSelectorStatesSaga(state => state.counterDelayReducer.delay)
    return delay
}

function* getCurrCash() {
    const currCash:number = yield useTypedSelectorStatesSaga(state => state.bankReducer.cash)
    return currCash
}

function getWorkerPayload(promptTitle:string):number | null {
    let payload:number = Number(prompt(promptTitle))
    return payload
}

function* incrementSagaWorker() {
    const delayValue:number = yield getDelayValue()
    let payload:number = yield getWorkerPayload('+ value')

    if(payload > 0) {
        yield delay(delayValue)
        yield put({ type: actionBankCounterTypes.ADD_CASH_SUCCESS, payload: payload })
    } else {
        yield put({type:actionBankCounterTypes.ERROR,error:'Increment value cannot be less 0'})
        return
    }
    if(isNaN(payload)) {
        put({type:actionBankCounterTypes.ERROR,error:'Not a number'})
    }
}

function* decrementSagaWorker() {
    const delayValue:number = yield getDelayValue()
    const currCash:number = yield getCurrCash()
    let payload:number = yield getWorkerPayload('- value')

    if(payload !== null && payload >= currCash) {
        payload = currCash
    } else if(payload < 0) {
        yield put({type:actionBankCounterTypes.ERROR,error:'Decrement value cannot be less 0'})
        return
    }

    if(isNaN(payload)) {
        yield put({type:actionBankCounterTypes.ERROR,error:'Not a number'})
        return null
    }

    yield delay(delayValue)
    yield put({ type: actionBankCounterTypes.GET_CASH_SUCCESS, payload: payload })
}

export function* counterSagaWatcher() {
    yield takeEvery(actionBankCounterTypes.ASYNC_COUNTER_INCR, incrementSagaWorker)
    yield takeEvery(actionBankCounterTypes.ASYNC_COUNTER_DECR, decrementSagaWorker)
}