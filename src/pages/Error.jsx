import {FaHome} from "react-icons/fa"
import {Link} from "react-router-dom"

function Error(){
  return(
    <div>
      <div className="text-center">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">
            Oops!
          </h1>
          <p className="text-5xl mb-8">404 Page Not Found</p>
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome className="mr-2"/>
            Return to the Home Page
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Error;