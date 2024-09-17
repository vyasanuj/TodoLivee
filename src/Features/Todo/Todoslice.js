import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    Todos : [{id:1 ,
        text : "Hello World"
    }]
}

export const Todoslice = createSlice ({
    name : "todo",
    initialState ,
    reducers : {
        ADDTodo : (state , action) => {
            const todo = {
                id : nanoid() ,
                text : action.payload
            }
            state.Todos.push(todo)
        },
        // RemoveTodo: (state, action) => {
        //     // Ensure you return the filtered array
        //     state.Todos = state.Todos.filter((todo) => todo.id !== action.payload);
        //   } ,
        RemoveTodo : (state , action) => {
            state.Todos = state.Todos.filter((todo)=>
                todo.id !== action.payload
            )
        } ,
        UpdateTodo : (state , action) => {
            const { id ,  newtext } = action.payload 
            const todo = state.Todos.find((todo)=>todo.id === id)
            if (todo){
                todo.text = newtext 
            }
        }
    }
})

export const {ADDTodo , RemoveTodo , UpdateTodo } = Todoslice.actions
export default Todoslice.reducer