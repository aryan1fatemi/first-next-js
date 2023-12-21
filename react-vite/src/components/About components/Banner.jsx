

const Banner = () => {
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center ">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-indigo-100">
            <h1 className="text-[52px] font-semibold mb-8 leading-normal">
                Hi, I'm <span className="text-indigo-400">Ariyan</span></h1>
                <p className="text-[19px]">computer science student. interested in Web Development and Reinforcement learning.passionate about mathematics and its applications.</p>
            <div className="flex mt-2 gap-2">
              <div className="flex items-center justify-center">
                <div className="flex space-x-2">

                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner