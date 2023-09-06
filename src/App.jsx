import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Movie from "./components/movie/Movie";
import MovieDetails from "./components/moviedetails/MovieDetails";
import TvShow from "./components/movie/TvShow";
//import Contact from "./components/contact/Contact";
import Search from "./components/search/Search";
//import Pricing from "./components/pricing/Pricing";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:id" element={<MovieDetails />} />

        <Route path="/tvshows" element={<TvShow />} />
        <Route path="/tvshows/:id" element={<MovieDetails />} />

        {/**<Route path="/contact" element={<Contact />} />**/}

        <Route path="/search" element={<Search />} />
        {/* <Route path="/search/:id" element={<MovieDetails />} /> */}

        {/**<Route path="/pricing" element={<Pricing />} />**/}
      </Routes>
    </Router>
  );
}

export default App;
