import sustainable from "../assets/Sustainable.png"
import flight from "../assets/AR Flight Experience.png"
import univibe from "../assets/Univibe.png"
import arubaito from "../assets/LogoFinal.png"
import ge from "../assets/GE Aerospace Sustainability Capstone Poster (1).png"
import divvy from "../assets/Divvy_Logo1.png"
import linkData, { Links } from './linkData';

const { projects, skills }: Links = linkData;

export interface Project {
    index: number;
    year: string;
    name: string;
    description: string;
    company: string;
    skills: Array<string>;
    link: string;
    skillsLink: Array<string>;
}

const project: Project[] = [
    {
        index: 0,
        year: sustainable,
        name: "Product Sustainability Dashboard",
        company: "",
        description: "The Product Sustainability Dashboard showcases the impact of various dummy products have on the environment.\nDesigned with a 3-layer drillthrough structure to provide an extended analysis of product data across different levels of detail.\nUtilized custom DAX and Power Query functions to enhance the efficiency of the dashboard.\nThe official version is utilized as a tool for KAO's ESG scientists to quickly obtain information about their products.",
        skills: ["PowerBI", "Excel", "DAX"],
        link: projects.kao,
        skillsLink: [skills.powerbi, skills.excel, skills.dax],
    },
    {
        index: 1,
        year: flight,
        name: "AR Flight Simulation",
        company: "",
        description: "The AR Flight Simulation is designed to enhance the flight experience of a passenger glued to their seats.\nDesigned panels with custom animation and transitions.\nCreated components to efficiently deploy similar cards.\nPresented for the Strategy Leaders of Product Development from Boeing.",
        skills: ["Figma", "PhotoShop", "Illustrator"],
        link: projects.flight,
        skillsLink: [skills.figma, skills.photoshop, skills.illustrator],
    },
    {
        index: 2,
        year: univibe,
        name: "Univibe\n(Social Gathering App)",
        company: "",
        description: "Univibe is a social gathering app designed to take the inputs of users within a group and generate a suggestion that matches the preference listed by each member.\nDeveloped this prototype with custom animations and transitions in 6 hours. \nPresented at a 24 hr Entrepreneurship Competition in Cincinnati.",
        skills: ["Figma", "PhotoShop", "Illustrator"],
        link: projects.univibe,
        skillsLink: [skills.figma, skills.photoshop, skills.illustrator]
    },
    {
        index: 3,
        year: ge,
        name: "Airfare Elasticity Model\n(MBA Capstone Project)",
        company: "",
        description: "The purpose of this model is to measure the willingness a consumer would pay extra money for flying greener.\nConducted and deployed the survey, analyzed raw data, created the data visuals, designed the poster, and presented for important stakeholders. \nPresented as a featured project for GE's Sustainability Openhouse Project Showcase 2023.",
        skills: ["Excel", "R", "Python"],
        link: projects.ge,
        skillsLink: [skills.excel, skills.r, skills.python]

    },
    {
        index: 4,
        year: divvy,
        name: "Divvy Member Acquisition\n(Google Capstone Project)",
        company: "",
        description: `The case study investigates the difference in behavior between a "casual rider" vs a "member" by analyzing various variables, such as time of day, minutes rode, and distance covered.\nThe case study starts with obtaining and cleaning raw data gathered from Divvy and then developing visual representation that would aide in developing strategies for customer conversion.`,
        skills: ["Excel", "R", "Github"],
        link: projects.divvy,
        skillsLink: [skills.excel, skills.r, skills.github]
    },
    {
        index: 5,
        year: arubaito,
        name: "Arubaito\n(Personal Streetwear Brand)",
        company: "",
        description: 'Arubaito was created in 2021 as a casual street-wear brand with the goal of making clothing affordable, comfortable, and expressive.\nThe brand currently features 5 collections that aims to capture a diverse audience in hopes of "having the perfect design for everyone".',
        skills: ["PhotoShop", "Illustrator", "InDesign"],
        link: projects.arubaito,
        skillsLink: [skills.photoshop, skills.illustrator, skills.indesign]
    },

]

export default project;