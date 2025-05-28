import { BrowserRouter, Routes } from "react-router";
import { Toaster } from "sonner";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import useRoutes from "./hooks/useRoutes";

const routes: React.ReactNode = useRoutes();

function App(){
  return(
    <>
      <BrowserRouter>
        <section className="flex flex-col justify-between h-screen">
          <Navbar/>
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                {routes}
              </Routes>
            </main>
          <Footer/>
        </section>
      </BrowserRouter>
      <Toaster richColors position="top-center"/>
    </>
  )
}

export default App;