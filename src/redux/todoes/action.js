import { ADDED, CLEARCOMPLETED, COLORSELECTED, COMPLETEDALL, DELETED, TOGGLE } from "./actionType"


export const added =(todoText) => {
    return{
        type:ADDED,
        payload: todoText,

    }
}
export const toggled =(todoId) => {
    return{
        type:TOGGLE,
        payload: todoId,

    }
}
export const colorSelected =(todoId, color) => {
    return{
        type:COLORSELECTED,
        payload: {
            todoId,
            color,
        },

    }
}
export const deleted =(todoId) => {
    return{
        type:DELETED,
        payload:todoId,

    }
}
export const allCompleted =() => {
    return{
        type:COMPLETEDALL,
       

    }
}
export const clerCompleted =() => {
    return{
        type:CLEARCOMPLETED,
       

    }
}