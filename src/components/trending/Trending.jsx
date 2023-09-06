import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { API_URL, Api_Key } from "../api/Api";
import Slider from "react-slick";
import { settings } from "../settings/Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../movie/MovieCard";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [theatre, setTheatre] = useState([]);
  const [onair, setOnair] = useState([]);

  const trendingContent = async () => {
    const { data } = await API_URL.get(
      `/trending/movie/day?api_key=${Api_Key}&page=1&language=en-US`
    );

    setTrending(data.results);
  };

  const theatreContent = async () => {
    const { data } = await API_URL.get(
      `/movie/now_playing?api_key=${Api_Key}&page=1&region=US`
    );

    setTheatre(data.results);
  };

  const onairContent = async () => {
    const { data } = await API_URL.get(
      `/tv/on_the_air?api_key=${Api_Key}&page=1&language=en-US&with_original_language=en`
    );

    setOnair(data.results);
  };

  useEffect(() => {
    trendingContent().then(() => theatreContent()).then(() => onairContent());
  }, []);

 

  return (
    <>
    {trending && (<Box my={3} px={3}>
      <Typography variant="h5" fontWeight={"bold"} mb={0.5}>Trending Now</Typography>
      <Slider {...settings}>
        {trending.length > 0 ? (
          trending.map((item) => (
            <Link key={item.id} to={`/movies/${item.id}`}>
              <MovieCard movies={item}  />
            </Link>
          ))
        ) : ""}
      </Slider>
    </Box>)}
    {theatre && (<Box my={3} px={3}>
      <Typography variant="h5" fontWeight={"bold"} mb={0.5}>Now Playing In Theatres</Typography>
      <Slider {...settings}>
        {theatre.length > 0 ? (
          theatre.map((item) => (
            <Link key={item.id} to={`/movies/${item.id}`}>
              <MovieCard movies={item}  />
            </Link>
          ))
        ) : ""}
      </Slider>
    </Box>)}
    {onair && (<Box my={3} px={3}>
      <Typography variant="h5" fontWeight={"bold"} mb={0.5}>Now Streaming On Air</Typography>
      <Slider {...settings}>
        {onair.length > 0 ? (
          onair.map((item) => (
            <Link key={item.id} to={`/tvshows/${item.id}`}>
              <MovieCard movies={item}  />
            </Link>
          ))
        ) : ""}
      </Slider>
    </Box>)}
    </>
  );
};

export default Trending;
