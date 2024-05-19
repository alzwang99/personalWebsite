import SectionComp from "./SectionComp"
import { useState } from "react";
import { Project } from "../../data/projectData"
interface DataProps {
    data: Project[]
    contentType: string
    windowWidth: number
}

function Section({ data, contentType, windowWidth }: DataProps) {

    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div>
            <h1 className="text-5xl max-w-[33rem] tb:max-w-[40rem] p-10 pt-5 tb:pr-20 m-auto">{contentType}</h1>
            {data.map((data, index) => (
                <div key={index}>
                    {(windowWidth >= 980) ?
                        <SectionComp info={data} contentType={contentType} setHovered={setHovered} hovered={hovered} windowWidth={windowWidth}
                        /> :
                        <SectionComp info={data} contentType={contentType} setHovered={() => console.log(hovered)} hovered={hovered} windowWidth={windowWidth}
                        />
                    }
                </div>
            ))}
        </div>
    )
}


export default Section
