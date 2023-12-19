import { Link } from "react-scroll";

export default function Navbar(){
  const content=
    <>
      <div className="absolute ">
        <ul>
          <Link to="Home">
            <li>Home</li>
          </Link >
          <Link to="Projects">
            <li>Projects</li>
          </Link>
          <Link to="Contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </> 
    return (
    <nav>
      <div className="h-10vh flex justify-between text-slate-100 lg:py-5 py-4 px-20 ">
        <div className="flex items-center flex-1">
          <span>Logo</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
            <Link to="Home">
              <li>Home</li>
            </Link >
            <Link to="Projects">
              <li>Projects</li>
            </Link>
            <Link to="Contact">
              <li>Contact</li>
            </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    )
  }
  