import TodoItem from './TodoItem'

function TodoList({}) {
    const { todos } = useTodos()
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onRemove={removeTodo} />
            ))}
        </ul>
    )
}

export default TodoList
