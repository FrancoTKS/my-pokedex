import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/publics/Cards";
import Card from "./components/publics/Card";
import { Footer } from "./components/publics/Footer";
import Navbar from "./components/publics/Navbar";
import Search from "./components/publics/Search";
import Details from "./components/publics/Details";
import Vid from "./components/publics/Vid";
import { Register } from './components/publics/secured/Register';
import { Login } from './components/publics/secured/Login';
import { Contact } from './components/publics/secured/Contact';
import Types from "./components/publics/Types";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/pokedex" element={<Cards />} />
        <Route  path="/evolutions" element={<Card/>}/>
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-pokedex" element= {<Vid/>} />
        <Route path="/type/:name" element={<Types/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
