import Content from "../components/Content"
import Hero from "../components/Hero"
import styles from "../components/Test.module.css"

function Test() {
    return (
        <div className=" h-[900vh]">
            <div>
                <Hero />
            </div>
            <div className={styles.absoluteContainer}>
                <Content />
            </div>
        </div>

    )
}

export default Test
