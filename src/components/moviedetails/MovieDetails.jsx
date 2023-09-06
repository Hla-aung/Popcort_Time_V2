/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { API_URL, Api_Key } from "../api/Api";
import { Box } from "@mui/material"
import MovieDetailsCard from "./MovieDetailsCard";
import TvDetailsCard from "./TvDetailsCard";
import "../moviedetails/MovieDetails.css";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieVideo, setMovieVideo] = useState([]);
  const [movieCast, setMovieCast] = useState([]);

  const [tvDetails, setTvDetails] = useState([]);
  const [tvVideo, setTvVideo] = useState([]);
  const [tvCast, setTvCast] = useState([]);

  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams();
  const {pathname} = useLocation();

  const getMovieDetails = async () => {
    const { data } = await API_URL.get(`/movie/${id}?api_key=${Api_Key}`);
    setMovieDetails(data);
  };
  const getMovieVideo = async () => {
    const { data } = await API_URL.get(
      `/movie/${id}/videos?api_key=${Api_Key}`
    );
    setMovieVideo(data.results);
  };
  const getMovieCast = async () => {
    const { data } = await API_URL.get(
      `/movie/${id}/credits?api_key=${Api_Key}`
    );
    setMovieCast(data.cast);
  };

  const getTvDetails = async () => {
    const { data } = await API_URL.get(`/tv/${id}?api_key=${Api_Key}`);
    setTvDetails(data);
  };
  const getTvVideo = async () => {
    const { data } = await API_URL.get(`/tv/${id}/videos?api_key=${Api_Key}`);
    setTvVideo(data.results);
  };
  const getTvCast = async () => {
    const { data } = await API_URL.get(`/tv/${id}/credits?api_key=${Api_Key}`);
    setTvCast(data.cast);
  };

  useEffect(() => {
    if(pathname.includes("movies")){
      getMovieDetails().then(
        () => getMovieVideo()
      ).then(
        () => getMovieCast()
      ).then(
        () => setIsLoading(false)
      )
      
    }
    if(pathname.includes("tvshows")){
      getTvDetails().then(
        () => getTvVideo()
      ).then(
        () => getTvCast()
      ).then(
        () => setIsLoading(false)
      )
      
    }
  }, [id, pathname]);

  return (
      <Box>
        {movieDetails && (
          <MovieDetailsCard
            movieDetails={movieDetails}
            movieCast={movieCast}
            movieVideo={movieVideo}
            isLoading={isLoading}
            key={movieDetails.id}
          />
        )}

        {tvDetails && (
          <TvDetailsCard
            tvDetails={tvDetails}
            tvCast={tvCast}
            tvVideo={tvVideo}
            isLoading={isLoading}
            key={tvDetails.id}
          />
        )}
      </Box>
  );
};

export default MovieDetails;
