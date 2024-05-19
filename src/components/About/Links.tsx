import Nav from "./Nav"
import Social from "./Social"
import styles from "./About.module.css"

interface LinksProps {
    githubLink: string
    github: string
    linkedInLink: string
    linkedIn: string
}

function Links({ githubLink, github, linkedInLink, linkedIn }: LinksProps) {
    return (
        <div>
            <div className={`pt-5 ${styles.pageNav}`}>
                <Nav word="Experience" />
                <Nav word="Projects" />
            </div>
            <div className={styles.socialMedia}>
                {/* https://dev.to/hasantezcan/how-to-colorize-svg-image-1kc8 */}
                <Social link={githubLink} image={github} hover="iconHover" />
                <Social link={linkedInLink} image={linkedIn} hover="iconHover" />
            </div>
        </div>
    )
}

export default Links
