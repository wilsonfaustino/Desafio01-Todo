import { useState } from 'react'

import './App.css'

import { Header } from './components/Header'
import { Task, TaskList } from './components/TaskList'
import { TodoForm } from './components/TodoForm'

function App() {
    const [tasks, setTasks] = useState<Task[]>([])

    const handleAddTask = (task: Task) => setTasks([...tasks, task])

    const handleDeleteTask = (id: string) =>
        setTasks(tasks.filter((task) => task.id !== id))

    const handleCompleteTask = (id: string) =>
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        )

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
