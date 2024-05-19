import { Project } from "../../data/projectData";
import Description from "./Description";
import Header from "./Header";
import styles from "./Section.module.css"
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
            <div className={`${styles.sectionComp} max-w-[33rem] tb:max-w-[40rem] p-10 tb:pr-20 m-auto ${windowWidth >= 980 ? `${styles.sectionCompHov}` : ''}
            ${contentType === "Projects" && windowWidth < 980 &&`pb-0`}`}>
                <a href={info.link} onClick={(e) => { e.preventDefault(); window.open(info.link, '_blank'); }}>
                    <Header info={info} contentType={contentType} windowWidth={windowWidth} />
                    <Description info={info} windowWidth={windowWidth} />
                </a>
            </div >
        </div >
    )
}

export default SectionComp

{/* <img src={info.year} alt={info.year} /> */ }