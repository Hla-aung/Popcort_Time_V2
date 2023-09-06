import { Stack, Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <Stack 
      direction={"row"}
      justifyContent={"space-evenly"}
      className="footer"
    >
      <img src="/img/Popcorn Time.svg" alt="logo" width={"300px"}/>
      <Stack
        direction={"column"}
        justifyContent={"center"}
      >
        <Typography color={"error"} sx={{fontSize: {
          md: 18,
          sm: 10
        }}}>Movies and TvShows&apos; information showing website using TMDB API intended for just practicing.</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
