import { motion } from "framer-motion";


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
            viewBox="0 0 730 730"
            className="item tb:w-[15vw]"
        >
      // gray trapezoid
            <motion.path
                stroke="#bfbfbf"
                strokeWidth="5"
                d="M0 179.89 238.77 179.89 238.75 283.55 0 395.69 0 179.89z"
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
                d="M481.23 538.37 720 538.37 720 323.13 481.25 435.26 481.23 538.37z"
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
                d="M328.64 242.78 461.36 181.89 328.64 181.89 328.64 242.78z"
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
                d="M391.36 476.15 258.64 537.04 391.36 537.04 391.36 476.15z"
                variants={icon2}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut" },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 1 },
                }}
            />
                  //Main black area
            <motion.path
                stroke="#000000"
                strokeWidth="5"
                d="M.02,0l-.02,108.79h238.75v174.77L0,395.69l.02,96.83L720,162.67V0H.02ZM461.36,181.77l-132.72,60.89V109.12h291.08l-158.36,72.65Z"
                variants={icon2}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 2, ease: "easeInOut", delay: 1 },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 2.5 },
                }}
            />
      //Main grey area
            <motion.path
                stroke="#bfbfbf"
                strokeWidth="5"
                d="M719.98,718.81l.02-108.79h-238.75v-174.77l238.75-112.13-.02-96.83L0,556.14v162.67h719.98ZM258.64,537.04l132.72-60.89v133.54H100.28l158.36-72.65Z"
                variants={icon1}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 2, ease: "easeInOut", delay: 1 },
                    fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 2.5 },
                }}
            />
        </motion.svg>
    </motion.div>
);
