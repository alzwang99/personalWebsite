import styles from "./Section.module.css"
import { Fragment } from "react/jsx-runtime";
import { Project } from "../../data/projectData";

interface DescriptionProps {
    info: Project,
    windowWidth: number
}

function Description({ info, windowWidth }: DescriptionProps) {
    return (
        <div>
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
        </div>
    )
}

export default Description
