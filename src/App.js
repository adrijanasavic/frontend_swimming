import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Specijal from "./components/Special/Specijal";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Specijal />
    </div>
  );
}

export default App;
