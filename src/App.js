import "./App.css";
import { Routes, Route } from "react-router-dom";
// import  Search  from './components/publics/Search';
import Cards from "./components/publics/Cards";
import Card from "./components/publics/Card";
import { Footer } from "./components/publics/Footer";
import Navbar from "./components/publics/Navbar";
import Search from "./components/publics/Search";
import SearchA from "./components/publics/SearchA";
import Details from "./components/publics/Details";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/pokedex" element={<Cards />} />
        <Route  path="/evolutions" element={<Card/>}/>
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/advancedSearch" element={<SearchA />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
