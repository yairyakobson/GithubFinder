import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { GitProvider } from "./context/github/GitContext";

function App(){
  return(
    <GitProvider>
      <Router className="bg-purple-500">
        <div className="flex flex-col justify-between h-screen">
          <Navbar/>
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Error" element={<Error/>}/>
                <Route path="/*" element={<Error/>}/>
              </Routes>
            </main>
          <Footer/>
        </div>
      </Router>
  </GitProvider>
  );
}
export default App;