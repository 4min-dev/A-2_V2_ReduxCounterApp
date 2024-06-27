import { TypedUseSelectorHook } from "react-redux";
import { select } from "redux-saga/effects";
import { TRootReducers } from "../redux/store/globalStore";

export const useTypedSelectorStatesSaga:TypedUseSelectorHook<TRootReducers> = select