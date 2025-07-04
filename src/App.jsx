import { useRef, useState } from 'react'
import TodoWriteForm from './components/TodoWriteForm'
import TodoList from './components/TodoList'

function App() {
    //const { todos, addTodo, removeTodo, toggleTodo } = useTodos()

    return (
        <>
            <TodoWriteForm addTodo={addTodo} />
            <TodoList />
        </>
    )
}

export default App
