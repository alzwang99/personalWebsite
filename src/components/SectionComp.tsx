import { Project } from "../data/projectData";
import styles from "./Section.module.css"
import { Fragment } from "react/jsx-runtime";
interface SectionCompProps {
    info: Project,
    contentType: string,
    setHovered: (value: number | null) => void;
    hovered: number | null;
    windowWidth: number;
}

function SectionComp({ info, contentType, setHovered, hovered, windowWidth }: SectionCompProps) {

    return (
        <div
            className={hovered !== null && hovered !== info.index ? `${styles.notHovered}` : ""}
            onMouseEnter={() => setHovered(info.index)}
            onMouseLeave={() => setHovered(null)}
        >
            <div className={`${styles.sectionComp} max-w-[33rem] tb:max-w-[40rem] p-10 tb:pr-20 m-auto ${windowWidth >= 980 ? `${styles.sectionCompHov}` : ''}`}>
                <a href={info.link} onClick={(e) => { e.preventDefault(); window.open(info.link, '_blank'); }}>
                    <div className="min-w-1/12 max-w-2/12 mr-4 float-left">
                        {contentType === "Experience" ? <p>{info.year}</p> : ""}
                    </div>
                    <div
                        className={`
                        text-[#434eeb] font-bold tb:text-black text-[1.25rem]
                        tb:text-[1rem] tb:font-medium"
                        desktop:flex ${contentType === "Projects" ? `${styles.sectionProject}` : ""}`}>
                        <h2>{windowWidth < 980 && <br />}{info.name}</h2>
                        <h2 className=" ml-1 text-[#434eeb] font-bold tb:text-black text-[1.25rem]
                        tb:text-[1rem] tb:font-medium">{info.company}</h2>
                    </div>
                    {(contentType === "Projects") ? <img src={info.year} alt={info.year} className=" pt-10" /> : ""}
                    <h3><br />{info.description.split('\n').map((line, index) => (
                        <Fragment key={index}>
                            {line}
                            <br />
                            <br />
                        </Fragment>
                    ))}</h3>
                    <div className={`${styles.sectionButtons} flex`}>
                        {info.skills.map((skill, index) => (
                            windowWidth >= 980 ? (
                                <a key={index} href={info.skillsLink[index]} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                    <button className="mt-2">{skill}</button>
                                </a>
                            ) : (
                                <p key={index} className={index === 0 ? "" : `${styles.otherSkills}`}>{index === 0 ? `${skill}, ` :
                                    `${skill}${index === info.skills.length - 1 ? "" : ", "}`}</p>
                            )
                        ))}
                    </div>
                </a>
            </div >
        </div >
    )
}

export default SectionComp

{/* <img src={info.year} alt={info.year} /> */ }