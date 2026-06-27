import Header from "../components/Header";
import Hero from "../components/Hero";
import Facilities from "../components/Facilities";
import "./Home.css";

function Home(){

  return(
    <div className="home-page">

      <Header />

      <Hero />

      <Facilities />

    </div>
  )
}

export default Home;