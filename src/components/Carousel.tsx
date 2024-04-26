import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Carousel.module.css"
import logo from "../assets/logobwbig.png"
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
            <div>
                <p>Logo</p>
                <img src={logo} alt="image" />
                <p className=" mt-auto">Designed with Illustrator</p>
            </div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </Carousel>
    );
}

export default CarouselComp