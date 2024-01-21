import Banner from "./About components/Banner"
import img from "../assets/photo.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiOpenaigym } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

export default function About(){
  AOS.init({
    easing: 'ease-out-cubic',
    delay:0,
    duration:800,
  })
  return (
    
    <div>
      <Banner />
      <div id="About" class="lg:px-56 px-10 lg:py-10 py-40 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center aos-init aos animate">
          <img data-aos="fade-down" src={img} width={320} height={320} class="rounded border-2 p-1 border-indigo-400 img_glow aos-init aos animate " alt="About"/>
          <div className=" h-full lg:py-10 flex flex-col justify-center lg:items-start items-center text-slate-100 aos-init aos animate ">
          <div className="w-full flex flex-row items-center place-content-between mb-6">
              <h1
                data-aos="fade-right"
                className="text-[52px] font-semibold leading-normal text-indigo-500 uppercase aos-init aos animate text-left"
              >
                About me
              </h1>
              <div className="flex items-center justify-end self-center mt-1">
                <div className="flex space-x-1">
                  <button className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded-lg pt-1.5 pb-2 px-4 uppercase relative overflow-hidden">
                    Resume
                  </button>
                </div>
              </div>
          </div>
            <p data-aos="fade-right" className="aos-init aos-animate text-[19px]">I'm a sophomore computer science student at NOVA. Throughout my studies, I have been focusing on reinforcement learning, front-end web development, and cloud computing. 

These are the technical skills that I have developed so far in my computer science journey.

I am not pretending to be a master in all of these skills; that would be amazing, but it is simply not true. I am continuously learning and improving in these areas to learn up-to-date tools.</p>
            <div className="flex mt-8 gap-2">
            </div>
            <p className="text-[20px] font-semibold mb-8 leading-normal font-serif">Programming languages and Frameworks:</p>
            <div className="flex flex-row space-x-2 font-serif">
              <div className="flex space-x-1">
                  <button className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded-lg pt-1.5 pb-2 px-4  relative overflow-hidden flex flex-row items-center space-x-2 place-content-between">
                    <FaReact /><p className="space-x-1 text-right">React-js</p>
                  </button>
              </div>
              <div className="flex space-x-1">
                  <button className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-gradient-to-r from-blue-600 to-yellow-400 border-indigo-500 rounded-lg pt-1.5 pb-2 px-4  relative overflow-hidden flex flex-row space-x-2 items-center place-content-between">
                  <FaPython /><p className="space-x-1 text-right">Python</p>
                  </button>
              </div>
              <div className="flex space-x-2">
                  <button className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-red-400 border-indigo-500 rounded-lg pt-1.5 pb-2 px-4 relative overflow-hidden flex flex-row items-center place-content-between space-x-2">
                   <FaJava /><p className="space-x-1 text-right">JAVA</p>
                  </button>
              </div>
              <div className="flex space-x-2">
                  <button className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-zinc-950 border-indigo-500 rounded-lg pt-1.5 pb-2 px-4 relative overflow-hidden flex flex-row items-center place-content-between space-x-2">
                  <SiNextdotjs /><p className="space-x-1 text-right">Next-js</p>
                  </button>
              </div>
              <div className="flex space-x-2">
                  <button className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-yellow-500 border-indigo-900 rounded-lg pt-1.5 pb-2 px-4 relative overflow-hidden flex flex-row items-center place-content-between space-x-2">
                  <SiJavascript /><p className="space-x-1 text-right">JavaScript</p>
                  </button>
              </div>
              <div className="flex space-x-1">
                  <button className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded-lg pt-1.5 pb-2 px-4  relative overflow-hidden flex flex-row items-center space-x-2 place-content-between">
                    <SiTailwindcss /><p className="space-x-1 text-right">Tailwind CSS</p>
                  </button>
              </div>
            </div>
            <p className="text-[20px] font-semibold mb-8 leading-normal pt-4 font-serif">Libraries:</p>
            <div className="flex flex-row space-x-2 font-serif">
              <div className="flex space-x-1">
                  <button className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded-lg pt-1.5 pb-2 px-4  relative overflow-hidden flex flex-row items-center space-x-2 place-content-between">
                    <SiNumpy /><p className="space-x-1 text-right">Numpy</p>
                  </button>
              </div>
              <div className="flex space-x-1">
                  <button className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded-lg pt-1.5 pb-2 px-4  relative overflow-hidden flex flex-row space-x-2 items-center place-content-between">
                  <SiKeras /><p className="space-x-1 text-right">keras</p>
                  </button>
              </div>
              <div className="flex space-x-2">
                  <button className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded-lg pt-1.5 pb-2 px-4 relative overflow-hidden flex flex-row items-center place-content-between space-x-2">
                   <SiOpenaigym /><p className="space-x-1 text-right">Gymnasium</p>
                  </button>
              </div>
              <div className="flex space-x-2">
                  <button className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-300 hover:text-indigo-800 border-indigo-500 rounded-lg pt-1.5 pb-2 px-4 relative overflow-hidden flex flex-row items-center place-content-between space-x-2">
                  <FaPython /><p className="space-x-1 text-right">Matplotlib</p>
                  </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
