import Section from "../Section/Section"
import { Project } from "../../data/projectData"
import { Work } from "../../data/experienceData"

interface WorksProps {
    expData: Work[]
    windowWidth: number
    projectData: Project[]
}

function Works({ expData, windowWidth, projectData }: WorksProps) {
    return (
        <div className="w-full tb:w-2/4 tb:float-right z-2 -pb-10">
            <div>
                <Section data={expData} contentType="Experience" windowWidth={windowWidth} />
            </div>
            <div id="Projects">
                <Section data={projectData} contentType="Projects"
                    windowWidth={windowWidth} />
            </div>
            <div className="max-w-[33rem] tb:max-w-[40rem] p-10 pb-5 m-auto tb:text-start text-center">
                <p>Developed with React and Tailwind.css</p>
                <p>Completed in 20 hours</p>
            </div>
        </div>
    )
}

export default Works
