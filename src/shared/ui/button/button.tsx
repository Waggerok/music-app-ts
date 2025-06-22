import type { ReactNode } from "react"
import styles from './button.module.scss'

interface ButtonProps {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Button = ({children, className, onClick} : ButtonProps) => {
    return (
        <button className={`${className} ${styles.button}`} onClick={onClick}>
            {children}
        </button>
    )
}