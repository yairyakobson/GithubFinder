function Footer(){
  const year = new Date().getFullYear();

  return(
    <footer className="footer footer-center p-6 bg-slate-300 text-white">
      <section>
        <p className="text-black font-medium footer-text
        md:text-[1.1rem]
        lg:text-lg
        xl:text-xl
        2xl:text-xl">Copyright &copy; 2022-{year} All rights reserved</p>
      </section>
     </footer>
   )
}

export default Footer;