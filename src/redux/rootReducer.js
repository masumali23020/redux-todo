import { combineReducers } from "redux"
import filterReducer from "../redux/filter/filterReducer"
import todoReducer from "../redux/todoes/todoReducer"
const  rootReducer = combineReducers({
    todos:todoReducer,
    filter: filterReducer,
})
export default rootReducer