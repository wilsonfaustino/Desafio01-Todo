import { FormEvent, useState } from 'react'
import { nanoid } from 'nanoid'
import { PlusCircle } from 'phosphor-react'

// styles
import styles from './TodoForm.module.css'
import { Task } from './TaskList'

export interface TodoFormProps {
    onChange: (value: Task) => void
}

export function TodoForm(props: TodoFormProps) {
    const [value, setValue] = useState('')

    // ---------------------------------------------
    // Functions
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (value.trim() === '') {
            return
        }
        let id = nanoid()
        const data = {
            id,
            title: value,
            completed: false,
        }
        props.onChange(data)
        setValue('')
    }
    // ---------------------------------------------
    // Render

    return (
        <form onSubmit={handleSubmit} className={styles.addTodo}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button disabled={value === ''}>
                Criar <PlusCircle size={20} />
            </button>
        </form>
    )
}
