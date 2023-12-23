import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import img from "../../assets/loco.png";
const Banner = () => {
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center ">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-indigo-100">
            <h1 className="text-[52px] font-semibold mb-8 leading-normal">
                Hi, I'm <span className="text-indigo-400">Ariyan</span></h1>
                <p className="text-[19px]">computer science student. interested in Web Development and Reinforcement learning.passionate about mathematics and its applications.</p>
            <div className="flex mt-2 gap-2">
              <div className="flex items-center justify-center">
                <div className="flex space-x-2">
                  <a href="https://github.com/aryan1fatemi" target="_blank" className="text-indigo-400 hover:text-indigo-500 rounded-full glow p-2"><SiGithub className="text-[28px]"/></a>
                </div>
                <div className="flex space-x-2">
                  <a href="https://www.linkedin.com/in/ariyan-fatemi-719126253/" target="_blank" className="text-indigo-400 hover:text-indigo-500 rounded-full glow p-2"><SiLinkedin className="text-[28px]"/></a>
                </div>
              </div>
            </div>
        </div>
        <img src={img} alt="Logo" className="rounded-full border-2 p-1 border-indigo-400 img_glow" width={320} height={320}/>
    </div>
  )
}

export default Banner