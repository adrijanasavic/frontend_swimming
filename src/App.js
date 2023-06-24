import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Outlet/>
    </div>
  );
}

export default App;

