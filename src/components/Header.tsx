import styles from './Header.module.css'
import { Logo } from './Logo'

export interface HeaderProps {
    children?: any
}

export function Header(props: HeaderProps) {
    return (
        <header className={styles.wrapper}>
            <Logo />
        </header>
    )
}
