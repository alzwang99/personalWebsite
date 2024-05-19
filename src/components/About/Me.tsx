import github from "../../assets/github.svg"
import linkedIn from "../../assets/linkedIn.svg"
import Intro from "./Intro";
import Links from "./Links";

interface MeProps {
    windowWidth: number
}

function Me({ windowWidth }: MeProps) {
    const githubLink = "https://github.com/alzwang99";
    const linkedInLink = "https://www.linkedin.com/in/alzwang/";

    return (
        <div className="max-w-[33rem] p-10 pt-5 tb:pl-20 m-auto tb:m-0">
            <Intro windowWidth={windowWidth} githubLink={githubLink} linkedInLink={linkedInLink} github={github} linkedIn={linkedIn} />
            {(windowWidth >= 980) &&
                <Links githubLink={githubLink} github={github} linkedInLink={linkedInLink} linkedIn={linkedIn} />
            }
        </div >
    )
}

export default Me
