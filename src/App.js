import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import User from "./pages/User";
import { GitProvider } from "./context/github/GitContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App(){
  return(
    <GitProvider>
      <AlertProvider>
      <Router className="bg-purple-500">
        <div className="flex flex-col justify-between h-screen">
          <Navbar/>
            <main className="container mx-auto px-3 pb-12">
              <Alert/>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/About" element={<About/>}/>
                  <Route path='/user/:login' element={<User/>}/>
                  <Route path="/Error" element={<Error/>}/>
                  <Route element={<Error/>}/>
                </Routes>
            </main>
          <Footer/>
        </div>
      </Router>
    </AlertProvider>
  </GitProvider>
  );
}
export default App;