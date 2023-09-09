import React, { useEffect } from "react"
import Header from "../../components/Header/Header"
import AboutUs from "../../components/AboutUs/AboutUs"
import Specijal from "../../components/Special/Specijal"
import Personal from "../../components/Personal/Personal"
import Gallery from "../../components/Gallery/Gallery"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
import Posts from "../../components/Posts/Posts"
import { useDispatch } from "react-redux"
import { setLanguage } from "../../redux/settingsSlice"

function Home({ lang }) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLanguage(lang))
  }, [lang])

  return (
    <div>
      <Header />
      <AboutUs />
      <Specijal />
      <Personal />
      {/* <SwiperPost /> */}
      <Gallery />
      <Posts />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
