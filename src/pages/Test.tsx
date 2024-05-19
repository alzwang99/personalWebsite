import Content from "../components/v2/Content"
import Hero from "../components/v2/Hero"
import styles from "../components/Test.module.css"

function Test() {
    return (
        <main className={styles.main}>
            <h1 className={styles.startText}>Let's Play Some Cards</h1>
            <Hero />
            <div className={styles.contentContainer}>
                <Content />
            </div>
        </main>

    )
}

export default Test
