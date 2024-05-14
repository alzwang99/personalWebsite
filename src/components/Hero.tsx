'use client'
import { useRef } from "react"
import card from "../assets/alzwangplayingCard.png"
import styles from "./Hero.module.css"
import { useScroll, useTransform, motion } from "framer-motion"

function Hero() {


    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 15])
    return (
        <div className={styles.container}>
            <h1 className="pt-40 pb-40">Let's Play Some Cards</h1>
            <div className={styles.scrollWatcher}></div>
            <div className={styles.sticky}>
                <div className={styles.ele}>
                    <motion.div style={{ scale: scale4 }} className={styles.imageContainer}>
                        <img src={card} alt="card" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}



export default Hero
