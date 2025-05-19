import { BrowserRouter as Router, Route, Routes } from "react-router"

import { GitProvider } from "./context/github/GitContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Error from "./pages/Error";
import Home from "./pages/Home";
import User from "./pages/User";

function App(){
  return(
    <GitProvider>
      <AlertProvider>
        <Router>
          <section className="flex flex-col justify-between h-screen">
            <Navbar/>
              <main className="container mx-auto px-3 pb-12">
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/user/:login" element={<User/>}/>
                  <Route path="*" element={<Error/>}/>
                </Routes>
              </main>
            <Footer/>
          </section>
        </Router>
      </AlertProvider>
    </GitProvider>
  );
}

export default App;