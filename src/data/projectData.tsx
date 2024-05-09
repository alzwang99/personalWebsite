import flight from "../assets/AR Flight Experience.png"
import univibe from "../assets/Univibe.png"
import arubaito from "../assets/LogoFinal.png"
import ge from "../assets/GE Aerospace Sustainability Capstone Poster (1).png"
import divvy from "../assets/Divvy_Logo1.png"

export interface Project {
    index: number;
    year: string;
    name: string;
    description: string;
    company: string;
}

const project: Project[] = [
    {
        index: 0,
        year: flight,
        name: "AR Flight Simulation",
        company: "",
        description: "Although Scott said it didn't matter to him, he knew deep inside that it did. They had been friends as long as he could remember and not once had he had to protest that something Joe apologized for doing didn't really matter. Scott stuck to his lie and insisted again and again that everything was fine as Joe continued to apologize. Scott already knew that despite his words accepting the apologies that their friendship would never be the same.",
    },
    {
        index: 1,
        year: univibe,
        name: "Univibe (Social Gathering App)",
        company: "",
        description: "They argue. While the argument seems to be different the truth is it's always the same. Yes, the topic may be different or the circumstances, but when all said and done, it all came back to the same thing. They both knew it, but neither has the courage or strength to address the underlying issue. So they continue to argue.",
    },
    {
        index: 2,
        year: arubaito,
        name: "Arubaito (Personal Streetwear Brand)",
        company: "",
        description: "The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may have called it a bridge, the reality was it was nothing more than splintered wooden planks held together by rotting ropes. It was questionable whether it would hold the weight of a child, let alone the weight of a grown man. The problem was there was no other way across the gully, and this played into his calculations of whether or not it was worth the risk of trying to cross it.",
    },
    {
        index: 3,
        year: ge,
        name: "Airfare Elasticity Model (Case Study)",
        company: "",
        description: "Another option you have is choosing the number of syllables in the words you speak. You probably have never considered this option before, but you have it every time you open your mouth and speak. You make so many choices like this that you never even think about, but you have the choice with each one. What are you going to do with this knowledge?",
    },
    {
        index: 4,
        year: divvy,
        name: "Divvy Member Acquisition (Case Study)",
        company: "",
        description: "Another option you have is choosing the number of syllables in the words you speak. You probably have never considered this option before, but you have it every time you open your mouth and speak. You make so many choices like this that you never even think about, but you have the choice with each one. What are you going to do with this knowledge?",
    },

]

export default project;