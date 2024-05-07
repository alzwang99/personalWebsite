import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Carousel.module.css"
import { responsive, carouselItems } from "./CarouselEle";

const CarouselComp = () => {
    return (
        <Carousel className={styles.carContainer} responsive={responsive}>{carouselItems.map((item, index) => (
            <div key={index}>
                <p>{item.name}</p>
                <img src={item.img} alt={item.img} />
                <p className="mt-auto">{item.description}</p>
            </div>
        ))}
        </Carousel>
    );
}

export default CarouselComp