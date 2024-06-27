import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TRootReducers } from "../redux/store/globalStore";

export const useTypedSelectorStates:TypedUseSelectorHook<TRootReducers> = useSelector