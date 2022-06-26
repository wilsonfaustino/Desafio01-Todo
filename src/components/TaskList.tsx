import { Trash } from 'phosphor-react'

import { CheckIcon } from './CheckIcon'
import CheckIconSvg from './assets/check-icon.svg'
import { EmptyList } from './EmptyLIst'

import styles from './TaskList.module.css'

export type Task = {
    id: string
    title: string
    completed: boolean
}

export interface TaskListProps {
    tasks: Task[]
    onDelete: (id: string) => void
    onComplete: (id: string) => void
}

export function TaskList({ tasks, onComplete, onDelete }: TaskListProps) {
    // ---------------------------------------------
    // Transformations
    const completedTasks = tasks.filter((task) => task.completed).length
    const completedText =
        tasks.length > 0 ? `${completedTasks} de ${tasks.length}` : '0'
    // ---------------------------------------------
    // Render

    return (
        <main className={styles.container}>
            <header className={styles.stats}>
                <p className={styles.createdTasks}>
                    Tarefas criadas <span>{tasks.length}</span>
                </p>
                <p className={styles.concludedTasks}>
                    Concluídas <span>{completedText}</span>
                </p>
            </header>
            <div className={styles.list}>
                {tasks.length === 0 && <EmptyList />}
                {tasks.length > 0 &&
                    tasks.map((task) => (
                        <div className={`${styles.task} ${
                            task.completed ? styles.completedTask : ''
                        }`} key={task.id}>
                            <button
                                className={`${styles.check} ${
                                    task.completed && styles.checked
                                }`}
                                onClick={() => onComplete(task.id)}
                            >
                                {task.completed && (
                                    <img src={CheckIconSvg} />
                                )}
                            </button>
                            <p
                                className={`${
                                    task.completed && styles.completed
                                }`}
                            >
                                {task.title}
                            </p>
                            <button
                                className={styles.delete}
                                title="apagar tarefa"
                                onClick={() => onDelete(task.id)}
                            >
                                <Trash size={20} />
                            </button>
                        </div>
                    ))}
            </div>
        </main>
    )
}
