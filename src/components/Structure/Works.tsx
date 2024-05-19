import { Project } from "../../data/projectData"
import { Work } from "../../data/experienceData"
import Footer from "./Footer"
import Content from "./Content"

interface WorksProps {
    expData: Work[]
    windowWidth: number
    projectData: Project[]
}

function Works({ expData, windowWidth, projectData }: WorksProps) {
    return (
        <div className="w-full tb:w-2/4 tb:float-right z-2 -pb-10">
            <Content expData={expData} windowWidth={windowWidth} projectData={projectData} />
            <Footer />
        </div>
    )
}

export default Works
