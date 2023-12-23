import img1 from "../assets/project1.png"

const Projects = () => {
  return (
    <div id="Projects" class="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" class="text-[52px] font-semibold mb-20 leading-normal uppercase text-indigo-500 aos-init aos-animate">Projects</h1>
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
          <div  data-aos="fade-up" className="justify-items-center border-2 border-indigo-600 px-2 py-5 rounded-3xl aos-init aos-animate flex flex-col">
            <img data-aos="fade-up" height="250" width="250" class="flex items-center justify-center rounded-3xl p-1 border-2 border-indigo-600 b_glow aos-init aos-animate" src={img1} alt=""/>
            <p data-aos="fade-up" className="pt-5 text-slate-100 text=[18px] text-center pb-3">First Project</p>
            <button data-aos="fade-up" className="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded py-1 relative overflow-hidden px-5 mx-auto">GitHub</button>
          </div>
          <div  data-aos="fade-up" className="justify-items-center border-2 border-indigo-600 px-2 py-5 rounded-3xl aos-init aos-animate flex flex-col">
            <img data-aos="fade-up" height="250" width="250" class="flex items-center justify-center rounded-3xl p-1 border-2 border-indigo-600 b_glow aos-init aos-animate" src={img1} alt=""/>
            <p data-aos="fade-up" className="pt-5 text-slate-100 text=[18px] text-center pb-3">First Project</p>
            <button data-aos="fade-up" className="neno-button shadow-xl hover:shadow-indigo-800/50  text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded py-1 relative overflow-hidden px-5 mx-auto">GitHub</button>
          </div>
          <div  data-aos="fade-up" className="justify-items-center border-2 border-indigo-600 px-2 py-5 rounded-3xl aos-init aos-animate flex flex-col">
            <img data-aos="fade-up" height="250" width="250" class="flex items-center justify-center rounded-3xl p-1 border-2 border-indigo-600 b_glow aos-init aos-animate" src={img1} alt=""/>
            <p data-aos="fade-up" className="pt-5 text-slate-100 text=[18px] text-center pb-3">First Project</p>
            <button data-aos="fade-up" className="neno-button shadow-xl hover:shadow-indigo-800/50  text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded py-1 relative overflow-hidden px-5 mx-auto">GitHub</button>
          </div>
          <div  data-aos="fade-up" className="justify-items-center border-2 border-indigo-600 px-2 py-5 rounded-3xl aos-init aos-animate flex flex-col">
            <img data-aos="fade-up" height="250" width="250" class="flex items-center justify-center rounded-3xl p-1 border-2 border-indigo-600 b_glow aos-init aos-animate" src={img1} alt=""/>
            <p data-aos="fade-up" className="pt-5 text-slate-100 text=[18px] text-center pb-3">First Project</p>
            <button data-aos="fade-up" className="neno-button shadow-xl hover:shadow-indigo-800/50  text-white border-2 hover:bg-indigo-600 border-indigo-500 rounded py-1 relative overflow-hidden px-5 mx-auto">GitHub</button>
        </div>
        </div>
    </div>
)}

export default Projects