import Banner from "./About components/Banner"
import img from "../assets/loco.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About(){
  AOS.init({
    easing: 'ease-out-cubic',
    delay:0,
    duration:800,
  })
  return (
    
    <div>
      <Banner />
      <div id="About" class="lg:px-56 px-10 lg:py-10 py-40 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
          <img data-aos="fade-down" src={img} width={320} height={320} class="rounded border-2 p-1 border-indigo-400 img_glow aos-init aos-animate" alt="About"/>
          <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-slate-100">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-indigo-500 uppercase aos-init aos animate">About me</h1>
            <p data-aos="fade-right" className="aos-init aos-animate text-[19px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium autem itaque fugiat, dignissimos pariatur ducimus voluptate, iure cupiditate nihil molestias magnam minima temporibus tempora corporis. Illo quaerat enim porro.</p>
            <div className="flex mt-8 gap-2">
              <div className="flex items-center justify-center">
                <div className="flex space-x-2">
                  <button className="neno-button shadow-xl hover:shadow-indigo-800/50  text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
