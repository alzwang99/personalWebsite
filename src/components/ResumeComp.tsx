import { Work } from "../data/resumeData"

interface ResumeCompProps {
    resume: Work
}

function ResumeComp({ resume }: ResumeCompProps) {
    return (
        <div className="max-w-[33rem] tb:max-w-[40rem] p-10 tb:pr-20 m-auto hover:bg-black">
            <div className="w-3/12 float-left">
                <p>{resume.year}</p></div>
            <div>
                <h2>{resume.jobTitle}</h2>
                <p><br />{resume.jobDescription}</p>
            </div>
        </div>
    )
}

export default ResumeComp
