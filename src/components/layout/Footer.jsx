function Footer(){
  const year = new Date().getFullYear();

  return(
    <footer className="footer p-4 bg-gray-700 text-primary-content footer-center">
      <div>
        <p>Copyright &copy; 2022-{year} All rights reserved</p>
      </div>
     </footer>
   )
}

export default Footer;