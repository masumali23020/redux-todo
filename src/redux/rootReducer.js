import { combineReducers } from "redux"
import filterReducer from "../redux/filter/filterReducer"
import todoReducer from "../redux/todoes/todoReducer"
const  rootReducer = combineReducers({
    todos:todoReducer,
    filters: filterReducer,
})
export default rootReducer