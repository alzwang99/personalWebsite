import resumeData from "../data/resumeData"
import ResumeComp from "./ResumeComp"

function Resume() {
    return (
        <div>
            {resumeData.map((resume, index) => (
                <ResumeComp key={index} resume={resume} />
            ))}
        </div>
    )
}

export default Resume
