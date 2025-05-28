import spinner from "./assets/spinner.gif";

function Spinner(){
  return(
    <section className="w-full mt-20">
      <img className="text-center mx-auto"
      width={180}
      src={spinner}
      alt="Loading..."/>
    </section>
  )
}

export default Spinner;