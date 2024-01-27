import img1 from "../assets/project1.png"
import img2 from "../assets/project2.png"
import img3 from "../assets/cart-pole.png"
import { AboutProject } from "./AboutProject"
import { useState } from "react"
import { Link } from "react-scroll";

const Projects = () => {
  const text3 =`In this project, i solved the Gymnasium's Cart Pole problem with DQN algorithm.
  A reward of +1 is given for every time step the pole remains upright. The algoritm eventually collected over 300 reward points on average.
  `
  const text2= `For this project, I Developed
  a model for aws deepracer car, a fully autonomous 1/18th scale race car driven by Proximal Policy Optimization (PPO). 
  I Placed in the top 10% of racers in United States league`
  const [showAbout, setShowAbout] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null)

  const handleShowAbout = (ProjectText) => {
    setSelectedProject(ProjectText)
    setShowAbout(true);
  }

  const handleCloseAbout = () => {
    setShowAbout(false);
  }

  return (
    <div className="z-1">
    <div id="Projects" class="p-20 flex flex-col items-center justify-center place-content-between">
      <h1 data-aos="fade-right" class="text-[52px] font-semibold mb-20 leading-normal uppercase text-indigo-500 aos-init aos-animate">Projects</h1>
      {showAbout && <AboutProject onClose={handleCloseAbout} ProjectText={selectedProject}/>}
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-10">
          <div  data-aos="fade-up" className="justify-items-center border-2 border-indigo-600 px-2 py-5 rounded-3xl aos-init aos-animate flex flex-col">
            <img data-aos="fade-up" height="250" width="250" class="flex items-center justify-center rounded-3xl p-1 border-2 border-indigo-600 b_glow aos-init aos-animate" src={img1} alt=""/>
            <p data-aos="fade-up" className="pt-5 text-slate-100 text=[18px] text-center pb-3">Messenger App</p>
            <div className="flex flex-row place-content-around">
              <a href="https://github.com/aryan1fatemi/amessenger" target="_blank">
                <button data-aos="fade-up" className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded py-1 relative overflow-hidden px-5 mx-auto">GitHub</button>
              </a>
              <a href="https://amessenger-3r85.vercel.app/" target="_blank">
                <button data-aos="fade-up" className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded py-1 relative overflow-hidden px-5 mx-auto">Link</button>
              </a>
            </div>
          </div>
          <div  data-aos="fade-up" className="justify-items-center border-2 border-indigo-600 px-2 py-5 rounded-3xl aos-init aos-animate flex flex-col">
            <img data-aos="fade-up" height="250" width="250" class="flex items-center justify-center rounded-3xl p-1 border-2 border-indigo-600 b_glow aos-init aos-animate" src={img2} alt=""/>
            <p data-aos="fade-up" className="pt-5 text-slate-100 text=[18px] text-center pb-3">AWS DeepRacer</p>
            <div className="flex flex-row place-content-around">
              <a href="https://github.com/aryan1fatemi/amessenger" target="_blank">
                <button data-aos="fade-up" className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded py-1 relative overflow-hidden px-5 mx-auto">GitHub</button>
              </a>
              <div>
                <button data-aos="fade-up" className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded py-1 relative overflow-hidden px-5 mx-auto" 
                onClick={() => handleShowAbout(text2)}>About</button>
              </div>
            </div>
          </div>
          <div  data-aos="fade-up" className="justify-items-center border-2 border-indigo-600 px-2 py-5 rounded-3xl aos-init aos-animate flex flex-col">
            <img data-aos="fade-up" height="250" width="250" class="flex items-center justify-center rounded-3xl p-1 border-2 border-indigo-600 b_glow aos-init aos-animate" src={img3} alt=""/>
            <p data-aos="fade-up" className="pt-5 text-slate-100 text=[18px] text-center pb-3">Cart Pole</p>
            <div className="flex flex-row place-content-around">
              <a href="https://github.com/aryan1fatemi/Gymnasium-Cart-Pole" target="_blank">
                <button data-aos="fade-up" className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded py-1 relative overflow-hidden px-5 mx-auto">GitHub</button>
              </a>
              <div>
              
                <button data-aos="fade-up" className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded py-1 relative overflow-hidden px-5 mx-auto" onClick={() => handleShowAbout(text3)}>About</button>

            
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
)}

export default Projects