function Footer(){
  const year = new Date().getFullYear();

  return(
    <footer className="footer p-6 bg-[#57606a] text-white footer-center">
      <section>
        <p>Copyright &copy; 2022-{year} All rights reserved</p>
      </section>
     </footer>
   )
}

export default Footer;