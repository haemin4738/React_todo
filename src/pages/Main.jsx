import { useTodos } from '../context/TodoContext'
import TodoItem from '../components/TodoItem'

function Main() {
    const { todos } = useTodos()

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default Main
