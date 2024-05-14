export interface Work {
    year: string;
    name: string;
    description: string;
    company: string;
    index: number;
}

const work: Work[] = [
    {
        index: 0,
        year: "Aug 2023 — Jan 2024",
        name: "Business Process Specialist ",
        company: "• Cintas",
        description: "Implemented SAP technologies to enhance data extraction and validation processes. \nConducted Customer Data Churn Analysis to implement strategies towards customer retention.",
    },
    {
        index: 1,
        year: "May 2022 — June 2023",
        name: "SharePoint Admin",
        company: "• University of Cincinnati",
        description: "They argue. While the argument seems to be different the truth is it's always the same. Yes, the topic may be different or the circumstances, but when all said and done, it all came back to the same thing. They both knew it, but neither has the courage or strength to address the underlying issue. So they continue to argue.",
    },
    {
        index: 2,
        year: "Jan 2022 — Aug 2022",
        name: "Design Researcher ",
        company: "• Livewell Collab",
        description: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may have called it a bridge, the reality was it was nothing more than splintered wooden planks held together by rotting ropes. It was questionable whether it would hold the weight of a child, let alone the weight of a grown man. The problem was there was no other way across the gully, and this played into his calculations of whether or not it was worth the risk of trying to cross it.",
    },
    {
        index: 3,
        year: "Feb 2021 — Aug 2021",
        name: "Full Stack Designer ",
        company: "• Drone Foward Inc",
        description: "Another option you have is choosing the number of syllables in the words you speak. You probably have never considered this option before, but you have it every time you open your mouth and speak. You make so many choices like this that you never even think about, but you have the choice with each one. What are you going to do with this knowledge?",
    },

]

export default work;