import { applyMiddleware, combineReducers, createStore } from "redux";
import { bankCounterReducer } from "./reducers/bankCounterReducer";
import { userReducer } from "./reducers/userReducer";
import { bankCounterDelayReducer } from "./reducers/bankCounterDelayReducer";
import createSagaMiddleware from 'redux-saga'
import { thunk } from "redux-thunk";
import { counterSagaWatcher } from "../../redux-saga/saga/counterSaga";

const sagaMiddleware = createSagaMiddleware()

const rootReducers = combineReducers({
    bankReducer:bankCounterReducer,
    userReducer:userReducer,
    counterDelayReducer:bankCounterDelayReducer
})

export const globalStore = createStore(rootReducers,applyMiddleware(thunk,sagaMiddleware))
export type TRootReducers = ReturnType<typeof rootReducers>

sagaMiddleware.run(counterSagaWatcher)