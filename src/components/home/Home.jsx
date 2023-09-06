import { Box } from "@mui/material";
import Topimg from "./Topimg";
import Trending from "../trending/Trending";
import Footer from "../footer/Footer";
//import { CircularProgress } from "@mui/material";

const Home = () => {
    return (
        <Box width={"100%"}>
            <Topimg />
            <Trending />
            <Footer />
        </Box>
    )
}


export default Home