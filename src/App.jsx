import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {

  return (
    <>
    <h1 className ="text-3xl font-bold text-white-100 text-center mb-4">Plan Your Day: Create and Manage Your Todos</h1>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
