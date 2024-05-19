'use client'
import { useRef } from "react"
import card from "../assets/alzwangplayingCard.png"
import styles from "./Hero.module.css"
import { useScroll, useTransform, motion } from "framer-motion"

function Hero() {


    const container = useRef(null);
    const { scrollYProgress: scrollYZoom } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const { scrollYProgress: scrollYOpacity } = useScroll({
        target: container,
        offset: ['0.7 0', '1.4 1.4']
    })

    const { scrollYProgress: scrollYBackground } = useScroll({
        target: container,
        offset: ['0.7 0', '1.4 1.4']
    })

    const scale5 = useTransform(scrollYZoom, [0, 1], [1, 6.08])
    const opacity = useTransform(scrollYOpacity, [0, 1], [1, 0])
    const background = useTransform(scrollYBackground, [0, 1], ["#000000", "#ffffff"])



    return (
        <div ref={container} className={styles.container}>
            <div className={styles.scrollWatcher}></div>
            <motion.div className={styles.sticky} style={{ backgroundColor: background }}>
                <div className={styles.el}>
                    <motion.div style={{ scale: scale5, opacity: opacity }}
                        className={styles.imageContainer}>
                        <img src={card} alt="card" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}



export default Hero
