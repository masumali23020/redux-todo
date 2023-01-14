import { useSelector } from "react-redux";
import Todo from "./Todo";


export default function TodoList() {
    const todos = useSelector((state) => state.todos)
    const filters = useSelector((state) => state.filters)
    const statusFilter = (todo) => {
        const {status} = filters;
        switch (status) {
            case "Completed":
               return todo.completed
            case "Incomplete":
               return !todo.completed
                
              
        
            default:
                return true;
        }
    }
    const colorFilter = (todo) => {
        const {colors} = filters;
        if( colors.length > 0){
            return colors.includes(todo?.color)


        }
        return true
    }
    
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
            .filter(statusFilter)
            .filter(colorFilter)
            .map(todo => (
                 <Todo key={todo.id} id={todo.id} todo={todo} />
            )
                   
            )}
         
        </div>
    );
}
