import flight from "../assets/AR Flight Experience.png"
import univibe from "../assets/Univibe.png"
import arubaito from "../assets/LogoFinal.png"

import GE from "../assets/GE Aerospace Sustainability Capstone Poster (1).png"

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const carouselItems = [
    {
        name: "AR Flight Experience",
        img: flight,
        description: "Figma (Design)",
    },
    {
        name: "Social Gathering App",
        img: univibe,
        description: "Figma (Design)",
    },
    {
        name: "Streetwear Brand",
        img: arubaito,
        description: "PS, Illustrator (Fashion)",
    },
    {
        name: "Sustainability Capstone Project",
        img: GE,
        description: "Excel, R, Canva",
    },
    {
        name: "Logo",
        img: "bruh",
        description: "moment",
    },
    {
        name: "Logo",
        img: "bruh",
        description: "moment",
    },
    {
        name: "Logo",
        img: "bruh",
        description: "moment",
    },
]