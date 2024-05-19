import linkData, { Links } from './linkData';

const { companies, skills }: Links = linkData;

export interface Work {
    index: number;
    year: string;
    name: string;
    description: string;
    company: string;
    skills: Array<string>;
    link: string;
    skillsLink: Array<string>;
}

const work: Work[] = [
    {
        index: 0,
        year: "Aug 2023 — Jan 2024",
        name: "Business Process Specialist ",
        company: "• Cintas",
        description: "Implemented SAP technologies to enhance data extraction and validation processes.\nConducted customer data churn analysis to implement strategies towards customer retention.",
        skills: ["SAP", "R", "Excel", "PowerBI", "SharePoint", "Access"],
        link: companies.cintas,
        skillsLink: [skills.sap, skills.r, skills.excel, skills.powerbi, skills.sharepoint, skills.access]
    },
    {
        index: 1,
        year: "May 2022 — June 2023",
        name: "SharePoint Admin",
        company: "• University of Cincinnati",
        description: "Constructed and facilitated multi-level Sharepoint servers.\n Developed security measures to protect and recover critical files using custom access control and backup procedures.",
        skills: ["SharePoint", "Excel"],
        link: companies.cincinnati,
        skillsLink: [skills.sharepoint, skills.excel]
    },
    {
        index: 2,
        year: "Jan 2022 — Aug 2022",
        name: "Design Researcher ",
        company: "• Livewell Collab",
        description: "Led a multidiscplinary team to develop innovative solutions using research, ideation, and development.\nOrganized and conducted interviews, field studies and focus groups to construct personas.\nFacilitated remote meetings with stakeholders and documented crucial files, organized for each client.",
        skills: ["Miro", "Figma", "PhotoShop", "Illustrator"],
        link: companies.liveWell,
        skillsLink: [skills.miro, skills.figma, skills.photoshop, skills.illustrator]
    },
    {
        index: 3,
        year: "Feb 2021 — Aug 2021",
        name: "Full Stack Designer ",
        company: "• Drone Forward Inc",
        description: "Spearheaded the enhancement of visual appeal and accessibility of the website.\nConstructed various graphical elements to develop a cohesive brand identity.",
        skills: ["Figma", "React", "PhotoShop", "Illustrator", "InDesign"],
        link: companies.drone,
        skillsLink: [skills.figma, skills.react, skills.photoshop, skills.illustrator, skills.indesign]
    },

]

export default work;