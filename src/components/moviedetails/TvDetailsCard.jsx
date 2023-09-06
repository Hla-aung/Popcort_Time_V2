/* eslint-disable react/prop-types */
import "../moviedetails/MovieDetails.css";
import Rating from "@mui/material/Rating";
import { Box, Stack, Typography, Grid, CircularProgress } from "@mui/material";
import Slider from "react-slick";
import { profileSettings, videoSettings } from "../settings/Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import unknown from "/img/unknown.png";
import red from "/img/red.png";

const img = "https://image.tmdb.org/t/p/original";
const img_500 = "https://image.tmdb.org/t/p/w500";
const img_1280 = "https://image.tmdb.org/t/p/w1280";

const TvDetailsCard = ({ tvDetails, tvVideo, tvCast, isLoading }) => {
  const tvposter = tvDetails.poster_path;
  const tvbackdrop = tvDetails.backdrop_path
    ? `${img_1280}/${tvDetails.backdrop_path}`
    : red;

  const tvnum = tvDetails.vote_average;
  const tvvoting = Math.round(tvnum * 10) / 10;
  const tvrating = tvvoting / 2;

  if (isLoading) {
    return (
      <Stack justifyContent={"center"} alignItems={"center"} height={"70vh"}>
        <CircularProgress color="error" />
      </Stack>
    );
  }

  return (
    <>
      <Box
        className="movieDetailsCard"
        id={tvDetails.id}
        key={tvDetails.id}
        sx={{ background: `url(${tvbackdrop})` }}
      >
        <Stack
          direction="row"
          justifyConent={"space-between"}
          alignItems={"center"}
          px={9}
          className="detailsbox"
        >
          <img
            src={`${img_500}/${tvposter}`}
            alt={tvDetails.title}
            className="poster"
          ></img>
          <Stack
            className="information"
            direction={"column"}
            justifyContent={"center"}
            gap={1.5}
          >
            <Box className="genres">
              {tvDetails.genres?.length > 0
                ? tvDetails.genres.map((item) => (
                    <Typography
                      id={item.id}
                      key={item.id}
                      variant="caption text"
                      fontWeight={"bold"}
                      sx={{ borderRadius: "5px", backgroundColor: "#f10000" }}
                      mr={1}
                      p={0.5}
                    >
                      {item.name}
                    </Typography>
                  ))
                : ""}
            </Box>

            <Typography
              variant="h4"
              color={"#f10000"}
              fontWeight={"bold"}
              mt={1.5}
            >
              {tvDetails.name}
            </Typography>

            <Stack direction={"row"} alignItems={"center"}>
              <Typography mr={0.5}>Rating: {tvvoting} </Typography>
              <Rating
                name="read-only"
                className="star"
                size="small"
                value={tvrating}
                precision={0.1}
                readOnly
              />
            </Stack>

            <Stack direction={"row"} alignItems={"center"}>
              <Typography>
                First Air Date: {tvDetails.first_air_date}
              </Typography>
            </Stack>

            <Stack className="overview" p={1}>
              <Typography variant="h6">Overview</Typography>
              <Typography>{tvDetails.overview}</Typography>
            </Stack>

            <Stack direction={"row"} alignItems={"center"}>
              {tvDetails && tvDetails.production_companies?.length > 0
                ? tvDetails.production_companies.map((item) =>
                    item.logo_path === null ? (
                      ""
                    ) : (
                      <img
                        src={`${img}/${item.logo_path}`}
                        key={item.id}
                        id="company"
                      ></img>
                    )
                  )
                : ""}
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Grid container className="others" p={2}>
        <Grid item lg={4}>
          <Typography textAlign={"center"}>
            Status:{" "}
            <Typography variant="caption text">{tvDetails.status}</Typography>
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography textAlign={"center"}>
            Language:{" "}
            <Typography variant="caption text">
              {tvDetails.original_language === "en"
                ? "English"
                : "Foreign Language"}
            </Typography>
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography textAlign={"center"}>
            Popularity:{" "}
            <Typography variant="caption text">
              {tvDetails.popularity}
            </Typography>
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography textAlign={"center"}>
            No. of Seasons:{" "}
            <Typography variant="caption text">
              {tvDetails.number_of_seasons}
            </Typography>
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography textAlign={"center"}>
            No. of Episodes:{" "}
            <Typography variant="caption text">
              {tvDetails.number_of_episodes}
            </Typography>
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography textAlign={"center"}>
            Total Votes:{" "}
            <Typography variant="caption text">
              {tvDetails.vote_count}
            </Typography>
          </Typography>
        </Grid>
      </Grid>

      <Box my={3} px={3}>
        <Typography variant="h5" fontWeight={"bold"} mb={0.5}>
          Casts
        </Typography>
        <Slider {...profileSettings}>
          {tvCast?.length > 0
            ? tvCast.slice(0, 10).map((item) => (
                <Stack key={item.id} width={"100%"} height={"250px"} p={2}>
                  {item.profile_path === null ? (
                    <img
                      src={unknown}
                      width={100}
                      height={150}
                      className="unknown"
                    />
                  ) : (
                    <img
                      src={`${img}/${item.profile_path}`}
                      alt="profile"
                      width={100}
                      height={150}
                      className="pp"
                    />
                  )}
                  <Typography>{item.name}</Typography>
                  <Typography variant="caption text" fontSize={"14px"}>
                    {" "}
                    as {item.character}
                  </Typography>
                </Stack>
              ))
            : ""}
        </Slider>
      </Box>

      <Box my={3} px={3}>
        <Typography variant="h5" fontWeight={"bold"} mb={0.5}>
          Videos
        </Typography>
        <Slider {...videoSettings}>
          {tvVideo?.length > 0
            ? tvVideo.slice(0, 5).map((item) => (
                <Box key={item.id}>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.key}`}
                    title="YouTube video player"
                    className="yt"
                    frameBorder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                  ></iframe>
                  <Typography>
                    {item.type} || {item.name}
                  </Typography>
                </Box>
              ))
            : ""}
        </Slider>
      </Box>
      {/**<div className="tvDetailsCard" id={tvDetails.id} key={tvDetails.id}>
        <img
          src={`${img_500}/${tvbackdrop}`}
          alt={tvDetails.name}
          className="backdrop"
        ></img>

        <div className="detailsbox">
          {tvposter === null ? (
            <img src={red} alt="No Poster" width={1280} />
          ) : (
            <img
              src={`${img_1280}/${tvposter}`}
              alt={tvDetails.name}
              className="poster"
            ></img>
          )}

          <div className="information">
            <div className="genres">
              {tvDetails.genres?.length > 0
                ? tvDetails.genres.map((item) => (
                    <span id={item.id} key={item.id}>
                      {item.name} |{" "}
                    </span>
                  ))
                : ""}
            </div>

            <h1>{tvDetails.name}</h1>

            <div className="rating">
              <span>Rating: {tvvoting} </span>
              <Rating
                name="read-only"
                className="star"
                size="small"
                value={tvrating}
                precision={0.1}
                readOnly
              />
            </div>

            <div className="release">
              <span>First Air Date: {tvDetails.first_air_date}</span>
              <br></br>
              <span></span>
              <span> </span>
            </div>

            <div className="overview">
              <h3>Overview</h3>
              <span>{tvDetails.overview}</span>
            </div>

            <div className="company">
              {tvDetails && tvDetails.production_companies?.length > 0
                ? tvDetails.production_companies.map((item) =>
                    item.logo_path === null ? (
                      ""
                    ) : (
                      <img
                        src={`${img}/${item.logo_path}`}
                        alt="logo"
                        key={item.id}
                      ></img>
                    )
                  )
                : ""}
            </div>
          </div>
        </div>
      </div>

      <div className="others">
        <p>
          Status: <span>{tvDetails.status}</span>
        </p>
        <p>
          Language:{" "}
          <span>
            {tvDetails.original_language === "en"
              ? "English"
              : "Foreign Language"}
          </span>
        </p>
        <p>
          Popularity: <span>{tvDetails.popularity}</span>
        </p>

        <p>
          No. of Seasons: <span>{tvDetails.number_of_seasons}</span>
        </p>
        <p>
          No. of Episodes: <span>{tvDetails.number_of_episodes}</span>
        </p>
        <p>
          Total Votes: <span>{tvDetails.vote_count}</span>
        </p>
      </div>

      <div className="cast">
        <h3>Casts</h3>
        {tvCast?.length >= 8 ? (
          <Slider {...profileSettings}>
            {tvCast?.length > 0
              ? tvCast.map((item) => (
                  <div className="profile" key={item.id}>
                    {item.profile_path === null ? (
                      <img
                        src={unknown}
                        width={100}
                        height={150}
                        className="unknown"
                        alt="unknown"
                      />
                    ) : (
                      <img
                        src={`${img}/${item.profile_path}`}
                        alt="profile"
                        width={100}
                        height={150}
                        className="pp"
                      />
                    )}
                    <p>{item.name}</p>
                    <span> as {item.character}</span>
                  </div>
                ))
              : ""}
          </Slider>
        ) : tvCast?.length > 0 ? (
          tvCast.map((item) => (
            <div className="profile1" key={item.id}>
              <div>
              {item.profile_path === null ? (
                <img
                  src={unknown}
                  width={100}
                  height={150}
                  className="unknown"
                  alt="unknown"
                />
              ) : (
                <img
                  src={`${img}/${item.profile_path}`}
                  alt="profile"
                  width={100}
                  height={150}
                  className="pp"
                />
              )}
              <p>{item.name}</p>
              <span> as {item.character}</span>
              </div>
            </div>
          ))
        ) : (
          ""
        )}
      </div>

      <div className="video">
        <h3>Videos</h3>
        <Slider {...videoSettings}>
          {tvVideo?.length > 0
            ? tvVideo.map((item) => (
                <div key={item.id}>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.key}`}
                    title="YouTube video player"
                    frameBorder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, allow-presentation"
                    className="yt"
                    allowFullScreen
                  ></iframe>
                  <span>
                    {item.type} || {item.name}
                  </span>
                </div>
              ))
            : ""}
        </Slider>
            </div>**/}
    </>
  );
};

export default TvDetailsCard;
