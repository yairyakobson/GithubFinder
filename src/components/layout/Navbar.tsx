import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

import type { NavbarProps } from "../../interfaces/navbarInterface";

const Navbar: React.FC<NavbarProps> = ({ title }) =>{
  return(
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <section className="container">
        <section className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-4xl"/>
          <Link to="/" className="text-xl font-bold align-middle p-1 sm:text-black">{title}</Link>
        </section>

        <section className="px-2 mx-2">
          <section className="flex">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn mt-1
            md:text-base font-bold">Home</Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn mt-1
            md:text-base font-bold">About</Link>
          </section>
        </section>
      </section>
    </nav>
  )
}

export default Navbar;