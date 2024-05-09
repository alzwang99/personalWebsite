
import About from "../components/About"
import Section from "../components/Section"
import resumeData from "../data/resumeData"
import projectData from "../data/projectData"

function Home() {
    return (
        <div className=" pt-12">
            <div className="w-5/8 tb:w-3/8 tb:float-left tb:fixed z-1">
                <About />
            </div>
            <div className="w-full tb:w-2/4 tb:float-right z-2">
                <Section data={resumeData} contentType="Resume" />
                <Section data={projectData} contentType="Projects" />
            </div>
        </div>
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
