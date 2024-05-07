import flight from "../assets/AR Flight Experience.png"
import univibe from "../assets/Univibe.png"
import arubaito from "../assets/LogoFinal.png"

import GE from "../assets/GE Aerospace Sustainability Capstone Poster (1).png"

import Divvy from "../assets/Divvy_Logo1.png"

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 6000, min: 2200 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 2200, min: 1024 },
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
        description: "Figma (Product Development)",
    },
    {
        name: "Social Gathering App",
        img: univibe,
        description: "Figma (Product Development)",
    },
    {
        name: "Streetwear Brand",
        img: arubaito,
        description: "PS, Illustrator (Fashion / Entrepreneurship)",
    },
    {
        name: "Sustainability Capstone Project",
        img: GE,
        description: "Excel, R, Canva (Data Analytics)",
    },
    {
        name: "Divvy Bike Share Case Study",
        img: Divvy,
        description: "Excel, R, PhotoShop (Data Analytics)"
    },
]