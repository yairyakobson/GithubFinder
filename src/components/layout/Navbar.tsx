import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

function Navbar(){
  return(
    <section className="navbar bg-slate-300 text-neutral-content shadow-sm mb-10">
      <section className="flex-1">
        <Link to="/" className="text-xl font-bold align-middle p-1 text-black">
          <FaGithub className="inline px-1 text-5xl"/>
          <h1 className="btn btn-ghost text-2xl text-black
          bg-transparent border-transparent text-black">The Github Finder</h1>
        </Link>
      </section>
    </section>
  )
}

export default Navbar;