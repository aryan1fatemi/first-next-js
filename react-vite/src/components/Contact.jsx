
const Contact = () => {
  return (
    <div id="Contact" class="p-4 lg:p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-left" class="text-[52px] font-semibold mb-20 leading-normal uppercase text-indigo-500 aos-init aos-animate">Contact Me</h1>
        <form action="" class="flex flex-col gap-2 lg:w-1/2">
        <div class="lg:flex gap-9"><input class="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-indigo-800 b_glow text-xl text-slate-500" placeholder="Enter Your Name" type="text"/>
            <input class="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-indigo-800 b_glow text-xl text-slate-300" placeholder="Enter Your Email" type="text"/>
        </div>
        <textarea class="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-indigo-800 b_glow text-xl text-slate-300" placeholder="Write Your Massage..." name="" id="" cols="20" rows="10" spellcheck="false"></textarea>
        <button class="neno-button shadow-xl hover:shadow-indigo-800/50 text-white border-2 border-indigo-800 bg-indigo-800 hover:text-indigo-500 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact