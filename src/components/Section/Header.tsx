import styles from "./Section.module.css"
import { Fragment } from "react/jsx-runtime";
import { Project } from "../../data/projectData";

interface HeaderProps {
    info: Project,
    contentType: string,
    windowWidth: number
}


function Header({ info, contentType, windowWidth }: HeaderProps) {
    return (
        <div>
            <div className="min-w-1/12 max-w-2/12 mr-4 float-left">
                {contentType === "Experience" ? <p>{info.year}</p> : ""}
            </div>
            <div
                className={`
        text-[#434eeb] font-bold tb:text-black text-[1.25rem]
        tb:text-[1rem] tb:font-medium"
        desktop:flex ${contentType === "Projects" ? `${styles.sectionProject}` : ""}`}>
                <h2>{windowWidth < 980 && <br />}{info.name.split('\n').map((line, index) => (
                    <Fragment key={index}>
                        {line}
                        <br />
                    </Fragment>))}</h2>
                <h2 className=" ml-1 text-[#434eeb] font-bold tb:text-black text-[1.25rem]
        tb:text-[1rem] tb:font-medium">{info.company}</h2>
            </div>
            {(contentType === "Projects") ? <img src={info.year} alt={info.year} className=" pt-10" /> : ""}
        </div>
    )
}

export default Header
