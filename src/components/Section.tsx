import SectionComp from "./SectionComp"
import { useState } from "react";
import "./Section.css"
import { Project } from "../data/projectData"
interface DataProps {
    data: Project[]
    contentType: string
}

function Section({ data, contentType }: DataProps) {

    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div>
            <h1 className="text-5xl max-w-[33rem] tb:max-w-[40rem] p-10 tb:pr-20 m-auto">{contentType}</h1>
            {data.map((data) => (
                <div>
                    <SectionComp info={data} contentType={contentType} setHovered={setHovered} hovered={hovered}
                    />
                </div>
            ))}
        </div>
    )
}


export default Section
