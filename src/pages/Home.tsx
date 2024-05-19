import expData from "../data/experienceData"
import projectData from "../data/projectData"
import Landing from "../components/Structure/Landing"
import { useState, useEffect } from "react";
import Works from "../components/Structure/Works"
import Biography from "../components/Structure/Biography";



function Home() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 5800)
    }, []);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            {loaded === false ?
                <Landing /> :
                <div className="pt-12 content-fade" id="Experience">
                    <Biography windowWidth={windowWidth} />
                    <Works expData={expData} projectData={projectData} windowWidth={windowWidth} />
                </div>
            }
        </>
    )
}

export default Home

// archived
// import Carousel from "../components/Carousel";

// function Home() {
//     return (
//         <main>
//             <h1 className="text-center">al<span>z</span>wang is a software engineer</h1>
//             <div className="pt-28">
//                 <div className="w-7/12 float-left">
//                     <h1 className="pb-10 pt-14">the works</h1>
//                     <Carousel />
//                 </div>
//                 <div className=" float-right w-4/12">
//                     <h1 className="pb-10">about</h1>
//                     <h2 className=" text-2xl">I am someone who seeks to create a connection between computer science, design, and business. My Goal is to help businesses push past </h2>
//                 </div>
//             </div>
//         </main>
//     )
// }
