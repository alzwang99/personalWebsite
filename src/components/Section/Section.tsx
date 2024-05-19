import SectionComp from "./SectionComp"
import { useState } from "react";
import { Project } from "../../data/projectData"
import { motion, Variants } from "framer-motion"


interface DataProps {
    data: Project[]
    contentType: string
    windowWidth: number
}

function Section({ data, contentType, windowWidth }: DataProps) {

    const [hovered, setHovered] = useState<number | null>(null);

    const cardVariants: Variants = {
        offscreen: {
            x: -100,
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.8
            }
        },
    };


    return (
        <div>
            <h1 className={`text-5xl max-w-[33rem] tb:max-w-[40rem] p-10 pt-5 tb:pr-20 m-auto ${contentType === "Projects" && `pb-0`}`}>{contentType}</h1>
            {data.map((data, index) => (
                <div key={index}>
                    {(windowWidth >= 980) ?
                        <SectionComp info={data} contentType={contentType} setHovered={setHovered} hovered={hovered} windowWidth={windowWidth}
                        /> :
                        <motion.div
                            className="card-container"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div variants={cardVariants}>
                                <SectionComp info={data} contentType={contentType} setHovered={() => console.log(hovered)} hovered={hovered} windowWidth={windowWidth} />
                            </motion.div>
                        </motion.div>
                    }
                </div>
            ))}
        </div>
    )
}


export default Section
