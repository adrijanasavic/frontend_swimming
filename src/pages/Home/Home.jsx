import React from "react"
import Header from "../../components/Header/Header"
import AboutUs from "../../components/AboutUs/AboutUs"
import Specijal from "../../components/Special/Specijal"
import Personal from "../../components/Personal/Personal"
import Gallery from "../../components/Gallery/Gallery"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"

function Home() {
  return (
    <div>
          <Header />
          <AboutUs />
          <Specijal />
          <Personal />
          <Gallery />
          <Contact />
          <Footer/>
    </div>
  )
}

export default Home;
