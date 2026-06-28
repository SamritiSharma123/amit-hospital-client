import Header from "../components/Header";
import Hero from "../components/Hero";
import Facilities from "../components/Facilities";
import Services from "../components/Services";

import "./Home.css";

function Home(){

  return(
    <div className="home-page">

      <Header />

      <Hero />

      <Facilities />

      <Services />

    </div>
  )
}

export default Home;