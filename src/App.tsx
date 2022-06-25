import { useState, useCallback } from 'react'

// styles
import './App.css'

// components
import { Header } from './components/Header'
import { Task, TaskList } from './components/TaskList'
import { TodoForm } from './components/TodoForm'

function App() {
    const [tasks, setTasks] = useState<Task[]>([])
    // ---------------------------------------------
    // Functions
    const handleAddTask = useCallback(
        (task: Task) => setTasks([...tasks, task]),
        [tasks]
    )

    const handleDeleteTask = useCallback(
        (id: string) => setTasks(tasks.filter((task) => task.id !== id)),
        [tasks]
    )

    const handleCompleteTask = useCallback(
        (id: string) =>
            setTasks((prev) =>
                prev.map((task) =>
                    task.id === id
                        ? { ...task, completed: !task.completed }
                        : task
                )
            ),
        []
    )
    // ---------------------------------------------
    // Render
    return (
        <div className="App">
            <Header />
            <div className="content">
                <TodoForm onChange={handleAddTask} />
                <TaskList
                    tasks={tasks}
                    onDelete={handleDeleteTask}
                    onComplete={handleCompleteTask}
                />
            </div>
        </div>
    )
}

export default App
