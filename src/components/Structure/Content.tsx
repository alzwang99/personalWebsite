import { Work } from "../../data/experienceData"
import { Project } from "../../data/projectData"
import Section from "../Section/Section"

interface ContentProps {
    expData: Work[]
    projectData: Project[]
    windowWidth: number
}

function Content({ expData, projectData, windowWidth }: ContentProps) {
    return (
        <div>
            <div>
                <Section data={expData} contentType="Experience" windowWidth={windowWidth} />
            </div>
            <div id="Projects">
                <Section data={projectData} contentType="Projects"
                    windowWidth={windowWidth} />
            </div>
        </div>
    )
}

export default Content
