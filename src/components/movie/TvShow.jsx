import { useEffect, useState } from "react";
import { API_URL, Api_Key } from "../api/Api";
import LatestTv from "../latest/LatestTv";
import MovieCard from "./MovieCard";
import { Box, Pagination, Typography, Stack, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const TvShow = () => {
  const [tv, setTv] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const getTv = async () => {
    const { data } = await API_URL.get(
      `/discover/tv?api_key=${Api_Key}&page=${currentPage}&language=en-US&with_original_language=en`
    );

    setTv(data.results);
    setPageCount(Math.floor(data.total_pages / 500));
  };

  useEffect(() => {
    getTv("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handleChangeTv = (event, value) => {
    setCurrentPage(value);
    getTv();
  };

  return (
    <Box mx={3}>
      <LatestTv />
      <Typography variant="h5" mt={3} fontWeight={"bold"}>All TV Shows</Typography>
        {tv.length > 0 ? (
        <Grid container spacing={0.5}>
          {tv.map((item) => (
            <Grid key={item.id} item lg={2} md={4} sm={4} xs={6}>
              <Link to={`/tvshows/${item.id}`}>
                <MovieCard movies={item} />
              </Link>
            </Grid>
          ))} 
        </Grid> 
        ) : (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            height={"70vh"}
          >
            <CircularProgress color="error"/>
          </Stack>  
        )}
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
          onChange={handleChangeTv}
        />
      </Stack>
    </Box>
  );
};

export default TvShow;
