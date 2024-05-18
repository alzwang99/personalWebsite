import styles from "./About.module.css";

interface SocialProps {
    link: string;
    image: string;
    hover: string;
}

function Social({ link, image, hover }: SocialProps) {
    return (
        <div>
            <a href={link} onClick={(e) => { e.preventDefault(); window.open(link, '_blank'); }}>
                <div className={`${styles.icon} ${styles[hover]}`} style={{ maskImage: `url(${image})`, WebkitMaskImage: `url(${image})` }} />
            </a>
        </div>
    )
}

export default Social
