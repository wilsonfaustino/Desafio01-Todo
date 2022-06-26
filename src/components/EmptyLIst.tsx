// assets
import Clipboard from './assets/Clipboard.png'
// styles
import styles from './EmptyList.module.css'

export function EmptyList() {
    return (
        <div className={styles.empty}>
            <img src={Clipboard} alt="ilustração de uma lista de tarefas" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}
