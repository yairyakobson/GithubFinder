import reactLogo from "../components/layout/assets/react.svg";

function Home(){
  return(
    <>
      <section className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={reactLogo}
          alt="React Logo"/>
        </figure>
        <section className="card-body">
          <h2 className="card-title">Vite + React</h2>
          <p>Click on the Vite and React logos to learn more</p>
        </section>
      </section>
    </>
  )
}

export default Home;