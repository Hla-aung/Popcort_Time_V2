import { useState, useEffect } from "react";
import { API_URL, Api_Key } from "../api/Api";
import LatestTvCard from "./LatestTvCard";
import Slider from "react-slick";
import { latestSettings } from "../settings/Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestTv = () => {
  const [latestcontent, setLatestContent] = useState([]);

  const latestContent = async () => {
    const {data} = await API_URL.get(
      `/tv/popular?api_key=${Api_Key}&page=1&language=en-US&with_original_language=en`
    );

    setLatestContent(data.results);
  };

  useEffect(() => {
    latestContent();
  }, []);

  return (
      <Slider {...latestSettings}>
        {latestcontent.length > 0
          ? latestcontent.map((item) => (
              <LatestTvCard latestMovie={item} key={item.id} />
            ))
          : ""}
      </Slider>
  );
};

export default LatestTv;
