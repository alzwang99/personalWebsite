import { Project } from "../data/projectData";
import "./Section.css"
import { Fragment } from "react/jsx-runtime";
interface SectionCompProps {
    info: Project,
    contentType: string,
    setHovered: (value: number | null) => void;
    hovered: number | null
}

function SectionComp({ info, contentType, setHovered, hovered }: SectionCompProps) {

    return (
        <div
            className={hovered !== null && hovered !== info.index ? "not-hovered" : ""}
            onMouseEnter={() => setHovered(info.index)}
            onMouseLeave={() => setHovered(null)}

        >
            <div className="section-comp max-w-[33rem] tb:max-w-[40rem] p-10 tb:pr-20 m-auto">
                <a href={info.link} onClick={(e) => { e.preventDefault(); window.open(info.link, '_blank'); }}>
                    <div className="min-w-1/12 max-w-2/12 mr-4 float-left">
                        {contentType === "Resume" ? <p>{info.year}</p> : ""}
                    </div>
                    <div className={`desktop:flex ${contentType === "Projects" ? "section-project" : ""}`}>
                        <h2>{info.name}</h2>
                        <h2 className=" ml-1">{info.company}</h2>
                    </div>
                    {(contentType === "Projects") ? <img src={info.year} alt={info.year} className=" pt-10" /> : ""}
                    <h3><br />{info.description.split('\n').map((line, index) => (
                        <Fragment key={index}>
                            {line}
                            <br />
                        </Fragment>
                    ))}</h3>
                    <div className="section-buttons flex">
                        {info.skills.map((skill, index) => (
                            <a key={index} href={info.skillsLink[index]} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                <button>{skill}</button>
                            </a>
                        ))}
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SectionComp

{/* <img src={info.year} alt={info.year} /> */ }