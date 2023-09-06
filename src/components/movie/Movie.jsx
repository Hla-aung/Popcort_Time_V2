import { useEffect, useState } from "react";
import { API_URL, Api_Key } from "../api/Api";
import Latest from "../latest/Latest";
import MovieCard from "./MovieCard";
import { Box, Pagination, Typography, Stack, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const getMovie = async () => {
    const { data } = await API_URL.get(
      `/discover/movie?api_key=${Api_Key}&page=${currentPage}&language=en-US&region=US`
    );

    setMovie(data.results);
    setPageCount(Math.floor(data.total_pages / 1000));
  };

  useEffect(() => {
    getMovie("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handleChangeMovie = (event, value) => {
    setCurrentPage(value);
    getMovie();
  };

  return (
    <Box mx={3}>
      <Latest />
      <Typography variant="h5" mt={3} fontWeight={"bold"}>All Movies</Typography>
      {movie.length > 0 ? (
        <Grid container spacing={0.5}>
          {movie.map((item) => (
            <Grid item lg={2} md={4} sm={4} xs={6} key={item.id}>
              <Link  to={`/movies/${item.id}`}>
                <MovieCard movies={item} />
              </Link>
            </Grid>))}
        </Grid>
        ) : (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            height={"70vh"}
          >
            <CircularProgress color="error"/>
          </Stack>  
        )
      }
      <Stack spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        mb={3}
      >
        <Pagination
          count={pageCount}
          color="error"
          shape="rounded"
          onChange={handleChangeMovie}
        />
      </Stack>
    </Box>
  );
};

export default Movie;
