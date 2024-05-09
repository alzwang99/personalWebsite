import { Project } from "../data/projectData";
import "./Section.css"

interface SectionCompProps {
    info: Project,
    contentType: string,
}

function SectionComp({ info, contentType }: SectionCompProps) {

    return (
        <div className="section-comp max-w-[33rem] tb:max-w-[40rem] p-10 tb:pr-20 m-auto">
            <div className="min-w-1/12 max-w-2/12 mr-4 float-left">
                {contentType === "Resume" ? <p>{info.year}</p> : ""}
            </div>
            <div className={`desktop:flex ${contentType === "Projects" ? "section-project" : ""}`}>
                <h2>{info.name}</h2>
                <h2 className=" ml-1">{info.company}</h2>
            </div>
            {(contentType === "Projects") ? <img src={info.year} alt={info.year} className=" pt-10" /> : ""}
            <h3><br />{info.description}</h3>
        </div >
    )
}

export default SectionComp

{/* <img src={info.year} alt={info.year} /> */ }