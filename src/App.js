import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Personal from "./components/Personal/Personal";
import Specijal from "./components/Special/Specijal";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Specijal />
      <Personal />
      <Gallery />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
