import me from "../../data/meData"
import Social from "./Social"
import styles from "./About.module.css"

interface IntroProps {
    windowWidth: number
    githubLink: string
    linkedInLink: string
    github: string
    linkedIn: string
}

function Intro({ windowWidth, githubLink, linkedInLink, github, linkedIn }: IntroProps) {
    return (
        <div>
            <h1 className=" text-5xl">Albert Wang</h1>
            <h2> Front-end Dev, UX Designer, Business Thinker</h2>
            {(windowWidth < 980) &&
                <div className={styles.socialMediaMobile}>
                    {/* https://dev.to/hasantezcan/how-to-colorize-svg-image-1kc8 */}
                    <Social link={githubLink} image={github} hover={""} />
                    <Social link={linkedInLink} image={linkedIn} hover={""} />
                </div>
            }
            {me.map((line) =>
                <p><br />{line.text}</p>
            )}
        </div>
    )
}

export default Intro
