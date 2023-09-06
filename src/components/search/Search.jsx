import { useState, useEffect } from "react";
import { API_URL, Api_Key } from "../api/Api";
import { useNavigate } from "react-router-dom";
import icon from "/img/unknown-2.jpg";
import "./Search.css";
import { Box, TextField, Stack, Typography } from "@mui/material";

const img_300 = "https://image.tmdb.org/t/p/w300";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [terms, setTerms] = useState("");

  const getSearch = async () => {
    const { data } = await API_URL.get(
      `/search/multi?api_key=${Api_Key}&query=${terms}&page=1`
    );

    setSearch(data.results);
  };
  useEffect(() => {
      getSearch([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terms]);

  const navigate = useNavigate()

  const handleClick = (id, media) => {
    if(media === "movie"){
      navigate(`/movies/${id}`)
    }
    if(media === "tv"){
      navigate(`/tvshows/${id}`)
    }
  }

  console.log(search)

  return (
    <Box m={3}>
      <TextField
        type="text"
        placeholder="Search for Movies"
        value={terms}
        onChange={(e) => setTerms(e.target.value)}
        fullWidth
        autoFocus
        size="small"
        color="error"
      />
      {search?.length > 0 ? (
        search.map((item) => {
          return (
              <Stack
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"} 
                className="search" 
                id={item.id}
                my={1}
                key={item.id}
                onClick={() => handleClick(item.id, item.media_type)}
              >
                <Box className="searchImg">
                  {item.poster_path === undefined ||
                  item.poster_path === null ? (
                    <img
                      src={icon}
                      width={160}
                      height={250}
                      alt="unknown"
                      className="unknownImg"
                    />
                  ) : (
                    <img
                      src={`${img_300}/${item.poster_path}`}
                      alt={item.title || item.name}
                    />
                  )}
                </Box>

                <Stack 
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  mx={2}>
                  <Typography variant="body1" color={"grey"}>{item.media_type === "tv" ? "Tv Show" : "Movie"}</Typography>
                  <Typography variant="h6" color={"#f10000"} fontWeight={"bold"}>{item.title || item.name}</Typography>
                  <Typography>{item.overview}</Typography>
                </Stack>
              </Stack>
          );
        })
      ) : (
        <Typography variant="h4" mt={3} textAlign={"center"} color={"error"}>No movies found!</Typography>
      )}
    </Box>
  );
};

export default Search;
