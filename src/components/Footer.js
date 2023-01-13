import { useDispatch, useSelector } from "react-redux"
import { colorChange, statusChange } from "../redux/filter/action"




const numberOfTodos = (nun_of_todo) => {
    switch (nun_of_todo) {
        case 0:
            return "No task"
        case 1:
            return "1 task"
            
           
    
        default:
           return `${nun_of_todo} tasks`;
    }
}
export default function Footer() {
    const todos = useSelector(state => state.todos)
    const filters = useSelector(state => state.filters)
    
    const {status, colors} = filters
    console.log(colors);
   
    const dispatch = useDispatch()

    const todoRemaing = todos.filter(todo => !todo.completed).length;

    const handelStatusChange = (status) => {
        dispatch(statusChange(status))
    }

   

    const handelColorChange = (color ) => {
        if(color.includes(color)){
            dispatch(colorChange(color, "removed"))
        }else {
            dispatch(colorChange(color, 'added'))

        }
    }


   
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todoRemaing)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === "All" && "font-bold"} `} onClick={() => handelStatusChange("ALL")} >All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "Incomplete" && "font-bold"} `} onClick={() => handelStatusChange("Incomplete")}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "Completed" && "font-bold"} `} onClick={() => handelStatusChange("Completed")}>Complete</li>
                <li></li>
                <li></li>
                <li className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer  ${colors.includes('green') &&  "bg-green-500"}   `} onClick={() => handelColorChange("green")}></li>

                <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer  ${colors.includes('red') &&  "bg-red-500"} `} onClick={() => handelColorChange("red")}></li>
                
                <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') &&  "bg-yellow-500"} `} onClick={() => handelColorChange("yellow")}></li>
            </ul>
           
        </div>
    );
}
