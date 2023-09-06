import { useState, useEffect } from "react";
import {API_URL, Api_Key} from "../api/Api.js"
import LatestMovieCard from "./LatestMovieCard";
import Slider from "react-slick";
import { latestSettings } from "../settings/Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Latest = () => {
  const [latestcontentMovie, setLatestContentMovie] = useState([]);

  const latestMovie = async () => {
    const {data} = await API_URL.get(
      `/movie/popular?api_key=${Api_Key}&page=1`
    );

    setLatestContentMovie(data.results);
  };

  useEffect(() => {
    latestMovie();
  }, []);

  return (
      <Slider {...latestSettings}>
        {latestcontentMovie.length > 0
          ? latestcontentMovie
              .slice(0, 8)
              .map((item) => (
                <LatestMovieCard latestMovie={item} key={item.id} />
              ))
          : ""}
      </Slider>
  );
};

export default Latest;
