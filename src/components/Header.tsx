import styles from './Header.module.css'
import Logo from './assets/Logo.svg'

export function Header() {
    return (
        <header className={styles.wrapper}>
            <img src={Logo} alt="logo todo" />
        </header>
    )
}
