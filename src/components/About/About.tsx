import styles from "./About.module.css"
import github from "../../../public/assets/github.svg"
import linkedIn from "../../../public/assets/linkedIn.svg"
import Social from "./Social";
import Nav from "./Nav";

interface AboutProps {
    windowWidth: number
}

function About({ windowWidth }: AboutProps) {
    const githubLink = "https://github.com/alzwang99";
    const linkedInLink = "https://www.linkedin.com/in/alzwang/";

    return (
        <div className="max-w-[33rem] p-10 pt-5 tb:pl-20 m-auto tb:m-0">
            <h1 className=" text-5xl">Albert Wang</h1>
            <h2> Front-end Dev, UX Designer, Business Thinker</h2>
            {(windowWidth < 980) &&
                <div className={styles.socialMediaMobile}>
                    {/* https://dev.to/hasantezcan/how-to-colorize-svg-image-1kc8 */}
                    <Social link={githubLink} image={github} hover={""} />
                    <Social link={linkedInLink} image={linkedIn} hover={""} />
                </div>
            }
            <p><br />I like to build the worst ideas with the best execution.</p>
            <p><br />An architecture professor once told me that you can complete a project to do the bare minimal, but to finish a project, you must put in effort, innovation, and fiery passion to showcase its greatness.</p>
            <p><br />What I want to achieve is developing a comfortable and holistic experience for consumers when using an unfamiliar product. I want to construct software that connects design, business, and engineering, allowing clear-cut communication and cooperation.</p>
            <p><br />In my free time, I try to avoid spending time on my computer, creating things with my hands, such as sewing, crocheting, or building foam-core models, and connecting with the natural world.</p>
            {(windowWidth >= 980) &&
                <>
                    <div className={`pt-5 ${styles.pageNav}`}>
                        <Nav word="Experience" />
                        <Nav word="Projects" />
                    </div>
                    <div className={styles.socialMedia}>
                        {/* https://dev.to/hasantezcan/how-to-colorize-svg-image-1kc8 */}
                        <Social link={githubLink} image={github} hover="iconHover" />
                        <Social link={linkedInLink} image={linkedIn} hover="iconHover" />
                    </div>
                </>
            }
        </div >
    )
}

export default About
