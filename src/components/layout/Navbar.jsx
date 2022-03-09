import {FaGithub} from "react-icons/fa"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"

function Navbar({title}){
  return(
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container">
            <div className="flex-none px-2 mx-2">
                <FaGithub className="inline pr-2 text-4xl"/>
                <Link to="/" className="text-xl font-bold align-middle p-1">{title}</Link>
            </div>
            <div className="px-2 mx-2">
                <div className="flex">
                    <Link to="/" className="btn btn-sm rounded-btn mt-1
                    md:text-base font-bold">Home</Link>
                    <Link to="/about" className="btn btn-sm rounded-btn mt-1
                    md:text-base font-bold">About</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: "Github Finder"
}
Navbar.propTypes = {
    title: PropTypes.string
}
export default Navbar;