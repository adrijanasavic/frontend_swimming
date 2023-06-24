import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
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
      <Personal/>
    </div>
  );
}

export default App;
