
import About from "../components/About"
import Section from "../components/Section"
import resumeData from "../data/resumeData"
import projectData from "../data/projectData"
import { Example } from "../components/LogoAnimation"
import { useState, useEffect } from "react";



function Home() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 5800)
    }, []);


    return (
        <>
            {loaded === false ?
                <div className="svg-animation splash-fade">
                    <Example />
                    <p className="splash-text tb:text-xl">alzwang.com</p>
                </div> :
                <div className="pt-12 content-fade">
                    <div className="w-5/8 tb:w-3/8 tb:float-left tb:fixed z-1">
                        <About />
                    </div>
                    <div className="w-full tb:w-2/4 tb:float-right z-2">
                        <Section data={resumeData} contentType="Resume" />
                        <Section data={projectData} contentType="Projects" />
                        <div className="max-w-[33rem] tb:max-w-[40rem] p-10 m-auto tb:text-start text-center">
                            <p>Designed with React and Tailwind.css</p>
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
