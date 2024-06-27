import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import *as actionCreators from '../redux/store/action-creator/fetchUsers'

export const useActionDispatch = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreators,dispatch)
}