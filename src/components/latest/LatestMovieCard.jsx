import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { API_URL, Api_Key } from "../api/Api";
import { Link } from "react-router-dom";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import "../latest/Latest.css"

const img = "https://image.tmdb.org/t/p/w1280"


// eslint-disable-next-line react/prop-types
const LatestMovieCard = ({ latestMovie : { id, backdrop_path, title,  release_date, overview, vote_average }}) => {
  const movie_id = id
 const [movie,setMovie] = useState([]);
 const [trailer,setTrailer] = useState([]);

 const getMovieData = async () => {
  const { data } = await API_URL.get(`/movie/${movie_id}?api_key=${Api_Key}`);

  setMovie(data)
 }

 const getTrailer = async () => {
  const { data } = await API_URL.get(`/movie/${movie_id}/videos?api_key=${Api_Key}`);

  setTrailer(data.results[0]?.key)
 }

 useEffect(() => {
    getMovieData([])
    getTrailer([])
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])
  const poster = backdrop_path
    return (
        <Box className="latestmovie" id={id}>
            
            <img src={`${img}/${poster}`} alt={title} />

            <Box>  
              <Typography variant="h3" sx={{color: "#f10000"}} fontWeight={"bold"}>{title}</Typography>
              <Typography variant="subtitle1" color={"white"}>Release Date: {release_date}</Typography>
              <Typography variant="subtitle1" color={"white"}> Rating: {vote_average}</Typography>
              <Typography variant="body2">{overview}</Typography>
              
              <Link to={`${id}`}>
                <Button startIcon={<InfoOutlinedIcon />} variant="contained">Details</Button>
              </Link>
              {movie && ( <Link to={`https://www.youtube.com/watch?v=${trailer}`} target="_blink">
                <Button startIcon={<PlayCircleOutlineOutlinedIcon />}>Play Trailer</Button>
              </Link> )} 
            </Box>
          </Box>
    )
}

export default LatestMovieCard;