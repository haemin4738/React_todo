function TodoItem({ todo }) {
    const { removeTodo, toggleTodo } = useTodos()
    return (
        <li>
            <input type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.checked} />
            {JSON.stringify(todo.checked)} / {todo.id} / {todo.text}
            <button onClick={() => onRemove(todo.id)}>X</button>
        </li>
    )
}

export default TodoItem
