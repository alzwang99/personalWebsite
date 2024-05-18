
import About from "../components/About/About"
import Section from "../components/Section"
import experienceData from "../data/experienceData"
import projectData from "../data/projectData"
import { Example } from "../components/LogoAnimation"
import { useState, useEffect } from "react";



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
                <div className="svg-animation splash-fade">
                    <Example />
                    <p className="splash-text mt-8">alzwang.com</p>
                </div> :
                <div className="pt-12 content-fade" id="Experience">
                    <div className="w-5/8 tb:w-3/8 tb:float-left tb:fixed z-1">
                        <About windowWidth={windowWidth} />
                    </div>
                    <div className="w-full tb:w-2/4 tb:float-right z-2 -pb-10">
                        <div>
                            <Section data={experienceData} contentType="Experience" windowWidth={windowWidth} />
                        </div>
                        <div id="Projects">
                            <Section data={projectData} contentType="Projects"
                                windowWidth={windowWidth} />
                        </div>
                        <div className="max-w-[33rem] tb:max-w-[40rem] p-10 pb-5 m-auto tb:text-start text-center">
                            <p>Developed with React and Tailwind.css</p>
                            <p>Completed in 20 hours</p>
                        </div>
                    </div>
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
