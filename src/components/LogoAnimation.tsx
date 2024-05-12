import * as React from "react";
import { motion } from "framer-motion";

const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)",
    },
};

const icon1 = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(191, 191, 191, 0)",
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(191, 191, 191, 1)",
    },
};

const icon2 = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(0, 0, 0, 1)",
    },
};

export const Example = () => (
    <motion.div>
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="120 0 800 800"
            className="item"
        >
      //Main black area
            <motion.path
                stroke="#000000"
                strokeWidth="5"
                d="M156.33 108.79 395.08 108.79 395.08 283.55 156.33 395.69 156.35 492.51 876.33 162.67 876.33 0 156.35 0 156.33 108.79z"
                variants={icon2}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut", delay: 2 },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 3 },
                }}
            />
      //Main grey area
            <motion.path
                stroke="#bfbfbf"
                strokeWidth="5"
                d="M876.33 610.03 637.58 610.03 637.58 435.26 876.33 323.13 876.31 226.3 156.33 556.14 156.33 718.81 876.31 718.81 876.33 610.03z"
                variants={icon1}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut", delay: 2 },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 3 },
                }}
            />
      //Main white area
            <motion.path
                stroke="#ffffff"
                strokeWidth="5"
                d="M156.35 492.51 156.33 556.14 876.31 226.3 876.33 162.67 156.35 492.51z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut", delay: 2 },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 3 },
                }}
            />
      //small white rectangle
            <motion.path
                stroke="#ffffff"
                strokeWidth="5"
                d="M156.33,108.79H395.08V180.44H156.33Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut", delay: 1 },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 2 },
                }}
            />
      //other small white rectangle
            <motion.path
                stroke="#ffffff"
                strokeWidth="5"
                d="M637.58,538.37H876.33V610.02H637.58Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut", delay: 1 },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 2 },
                }}
            />
      //white trapezoid
            <motion.path
                stroke="#ffffff"
                strokeWidth="5"
                d="M484.97 109.12 776.05 109.12 484.97 242.66 484.97 109.12z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut", delay: 1 },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 2 },
                }}
            />
      //other white trapezoid
            <motion.path
                stroke="#ffffff"
                strokeWidth="5"
                d="M547.7 609.69 256.61 609.69 547.7 476.15 547.7 609.69z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut", delay: 1 },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 2 },
                }}
            />
      // gray trapezoid
            <motion.path
                stroke="#bfbfbf"
                strokeWidth="5"
                d="M395.1 180.44 395.1 284.31 156.33 395.81 156.33 180.44 395.1 180.44z"
                variants={icon1}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut" },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 1 },
                }}
            />
      // black trapezoid
            <motion.path
                stroke="#000000"
                strokeWidth="5"
                d="M637.57 538.37 637.57 434.57 876.33 323.14 876.33 538.37 637.57 538.37z"
                variants={icon2}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut" },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 1 },
                }}
            />
      //gray triangle
            <motion.path
                stroke="#bfbfbf"
                strokeWidth="5"
                d="M484.97 181.77 617.69 181.77 484.97 242.66 484.97 181.77z"
                variants={icon1}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut" },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 1 },
                }}
            />
      //black triangle
            <motion.path
                stroke="#000000"
                strokeWidth="5"
                d="M547.7 537.04 414.98 537.04 547.7 476.15 547.7 537.04z"
                variants={icon2}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut" },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 1 },
                }}
            />
        </motion.svg>
    </motion.div>
);
