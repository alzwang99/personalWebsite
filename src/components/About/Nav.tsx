import styles from "./About.module.css"

interface NavProps {
    word: string,
}

function Nav({ word }: NavProps) {
    return (
        <div className={styles.pageNav}>
            <a className={styles.pageNavHover} href={`#${word}`}>—{word}</a>
        </div>
    )
}

export default Nav
