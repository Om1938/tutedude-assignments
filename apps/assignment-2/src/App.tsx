import { useState } from 'react'
import './App.css'

type Todo = {
  id: number
  text: string
  completed: boolean
}

function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = () => {
    const trimmedTask = task.trim()

    if (!trimmedTask) {
      alert('Invalid Input')
      return
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmedTask,
      completed: false,
    }

    setTodos((prevTodos) => [...prevTodos, newTodo])
    setTask('')
    alert('Todo added successfully!')
  }

  const toggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  return (
    <div className="app">
      <div className="todo-card">
        <h1>Simple Todo Tracker</h1>
        <section className="input-section">
          <input
            type="text"
            placeholder="Enter todo here..."
            value={task}
            onChange={(event) => setTask(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') handleAddTodo()
            }}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </section>

        <section className="list-section">
          {todos.length === 0 ? (
            <p className="empty-state">
              Add a todo. List is empty
            </p>
          ) : (
            <ul className="todo-list">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`todo-item ${todo.completed ? 'completed' : ''}`}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                    />
                    <span>{todo.text}</span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}

export default App
