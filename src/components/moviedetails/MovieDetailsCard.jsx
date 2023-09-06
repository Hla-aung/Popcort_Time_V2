/* eslint-disable react/prop-types */
import "../moviedetails/MovieDetails.css"
import Rating from '@mui/material/Rating';
import { Box, Stack, Typography, Grid, CircularProgress, Button } from '@mui/material';
import Slider from "react-slick";
import { profileSettings } from "../settings/Slide";
import { videoSettings } from "../settings/Slide";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import unknown from "/img/unknown.png"
import { YTS_URL } from "../api/Api";
import { useEffect, useState } from "react";

const img = "https://image.tmdb.org/t/p/original"
const img_500 = "https://image.tmdb.org/t/p/w500"
const img_1280 = "https://image.tmdb.org/t/p/w1280"

const MovieDetailsCard = ({movieDetails, movieVideo, movieCast, isLoading}) => {
    const [yts, setYts] = useState()

    const poster = movieDetails.poster_path
    const backdrop = `${img_1280}/${movieDetails.backdrop_path}`
    
    const num = movieDetails.vote_average
    const voting = Math.round(num * 10) / 10;
    const rating = voting / 2;
    
    const budget = movieDetails.budget
    const budgetM = Math.round(budget / 1000000);

    const revenue = movieDetails.revenue
    const revenueM = Math.round(revenue / 1000000);

    const getYts = async () => {
        const {data} = await YTS_URL.get(`/movie_details.json?imdb_id=${movieDetails?.imdb_id}`)
        setYts(data.data.movie)
    }

    useEffect(() => {
        getYts()
    }, [movieDetails?.imdb_id])

    const ytsTorrents = yts?.torrents.filter((movie) => movie.video_codec === "x264")

    console.log(ytsTorrents)

    if (isLoading) {
        return (
          <Stack justifyContent={"center"} alignItems={"center"} height={"90vh"}>
            <CircularProgress color="error" />
          </Stack>
        );
      }

    return(
        <>
        <Box className="movieDetailsCard" id={movieDetails.id} key={movieDetails.id} sx={{background: `url(${backdrop})`, backgroundPosition: "center", backgroundSize: "cover"}}>
            <Stack 
                direction="row"
                justifyConent={"space-between"}
                alignItems={"center"}
                px={9}
                className="detailsbox">
                
                <img src={`${img_500}/${poster}`} alt={movieDetails.title} className="poster"></img>
                <Stack 
                    className="information"
                    direction={"column"}
                    justifyContent={"center"}
                    gap={1.5}
                >
                    <Box className="genres">{
                        movieDetails.genres?.length > 0 ? (movieDetails.genres.map((item) => (
                        <Typography 
                            id={item.id} 
                            key={item.id} 
                            variant="caption text"
                            fontWeight={"bold"} 
                            sx={{ borderRadius: "5px", backgroundColor: "#f10000"}} 
                            mr={1} 
                            p={0.5}>{item.name}</Typography>
                        ))) : ''
                    }</Box>
                
                    <Typography variant="h4" color={"#f10000"} fontWeight={"bold"} mt={1.5}>{movieDetails.title}</Typography>
                
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                    >
                        <Typography mr={0.5}>Rating: {voting} </Typography>
                        <Rating name="read-only" className="star" size="small" value={rating} precision={0.1} readOnly />
                    </Stack>
                
                    <Stack 
                        direction={"row"}
                        alignItems={"center"}
                    >
                        <Typography>Released Date: {movieDetails.release_date} ||</Typography>
                        <Typography ml={0.5}> Runtime: {movieDetails.runtime} minutes</Typography>
                    </Stack>
               
                    <Stack className="overview" p={1}>
                        <Typography variant="h6">Overview</Typography>
                        <Typography>{movieDetails.overview}</Typography>
                    </Stack>

                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                    >
                        { movieDetails && movieDetails.production_companies?.length > 0 ? (movieDetails.production_companies.map((item) => (
            
                        item.logo_path === null ? '' : 
                        <img src={`${img}/${item.logo_path}`} key={item.id} id="company"></img>
                    
                        ))) : ""}
                    </Stack>
                </Stack>
            </Stack>
        </Box>

        <Grid container className="others" p={2}>
            <Grid item lg={4}>
                <Typography textAlign={"center"}>Status: <Typography variant="caption text">{movieDetails.status}</Typography></Typography>
            </Grid>
            <Grid item lg={4}>
                <Typography textAlign={"center"}>Language: <Typography variant="caption text">{movieDetails.original_language === "en" ? "English" : 'Foreign Language'}</Typography></Typography>
            </Grid>
            <Grid item lg={4}>
                <Typography textAlign={"center"}>Popularity: <Typography variant="caption text">{movieDetails.popularity}</Typography></Typography>
            </Grid>
            <Grid item lg={4}>
                <Typography textAlign={"center"}>Revenue: <Typography variant="caption text">${revenueM} Millions</Typography></Typography>
            </Grid>
            <Grid item lg={4}>
                <Typography textAlign={"center"}>Budget: <Typography variant="caption text">${budgetM} Millions</Typography></Typography>
            </Grid>
            <Grid item lg={4}>
                <Typography textAlign={"center"}>Total Votes: <Typography variant="caption text">{movieDetails.vote_count}</Typography></Typography>
            </Grid>    
        </Grid>

        {ytsTorrents?.length > 0 && <Box my={3} px={3}>
            <Typography variant="h5" fontWeight={"bold"} mb={0.5}>Torrent Download Links</Typography>
            <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={3}
            >
                {
                    ytsTorrents?.map((torrent, i) => (
                        <Stack
                            key={i}
                            direction={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                        <Button
                            variant="contained"
                            color="error"
                            href={torrent.url}
                            sx={{
                                textTransform: "capitalize"
                            }}
                        >
                            {torrent.type}{" "}{torrent.quality}
                        </Button>
                        <Typography variant="body2">{torrent.size}</Typography>
                        </Stack>
                    ))
                }
            </Stack>
        </Box>}
        

        <Box my={3} px={3}>
            <Typography variant="h5" fontWeight={"bold"} mb={0.5}>Casts</Typography>
            <Slider {...profileSettings}>
                {movieCast?.length > 0 ? (movieCast.slice(0,10).map((item) => (
                    <Stack  
                        key={item.id}   
                        width={"100%"}
                        height={"250px"}
                        p={2}
                    >
                        {item.profile_path === null ? 
                            <img src={unknown} width={100} height={150} className="unknown"/> : 
                            <img src={`${img}/${item.profile_path}`} alt="profile" width={100} height={150} className="pp" />}
                        <Typography>{item.name}</Typography>
                        <Typography variant="caption text" fontSize={"14px"}> as {item.character}</Typography>
                    </Stack>
                ))) : ''}
            </Slider> 
        </Box>

        <Box my={3} px={3}>
                <Typography variant="h5" fontWeight={"bold"} mb={0.5}>Videos</Typography>
                <Slider {...videoSettings}>
                    {movieVideo?.length > 0 ? (movieVideo.slice(0,5).map((item) => (
                        <Box key={item.id}>
                            <iframe
                               src={`https://www.youtube.com/embed/${item.key}`}
                               title="YouTube video player" 
                               className="yt"
                               frameBorder="1"
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                               allowFullScreen
                            ></iframe>
                            <Typography>{item.type} || {item.name}</Typography>
                        </Box> 
                    ))) : ''}
                </Slider>
            </Box>
        </>
    )
}

export default MovieDetailsCard