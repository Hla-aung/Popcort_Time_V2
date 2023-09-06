import { Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const img_300 = "https://image.tmdb.org/t/p/w300"
// eslint-disable-next-line react/prop-types
const TrendingMovieCard = ({trendingMovie : {id, poster_path, title, vote_average, name}}) => {
    const poster = poster_path
    const num = vote_average
    const voting = Math.round(num * 10) / 10;
    return (   
            <Stack
                direction={"column"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                width={"100%"}
                height={"320px"}            
                id={id}
                position={"relative"}
                p={3}
            >
                <img src={`${img_300}/${poster}`}  alt={title || name} width={"150px"} height={"225px"} style={{borderRadius: "10px"}} id="cardImg"/>
                <Typography variant="caption text" p={1}>{title || name}</Typography>
                <Stack
                    direction={"row"}
                    p={1}
                    sx={{position: "absolute", left: "1.65rem", color: "white", backgroundColor: "#f10000", borderRadius: "10px 0 10px 0", opacity: "90%"}}
                >
                    <StarIcon fontSize="10px"/>
                    <Typography variant="caption text" fontSize={"12px"} fontWeight={"bold"}>{voting}</Typography>
                </Stack>
            </Stack>
    )
}

export default TrendingMovieCard