import { useState } from "react";
import logo from "/img/Popcorn Time.svg";
import { Stack, Button } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import '../header/Header.css';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [mobile, setMobile] = useState(false);
    const navigate = useNavigate()

    const handleClickSearch = () => {
        navigate('/search')
    }
    return (
        <Stack 
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            className="container">
            <Stack 
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Link to='/' className="link"><img src={logo} alt="Popcorn Time" /></Link>
                <ul className={mobile ? "navMenu-list" : "flexSB"}>
                    <Link to='/search' className="searchlink">Search</Link>
                    <Link to='/' className="link">Home</Link>
                    <Link to='/movies' className="link">Movies</Link>
                    <Link to='/tvshows' className="link">TvShows</Link>
                    {/**<Link to='/pricing' className="link">Pricing</Link>
                    <Link to='/contact' className="link">Contact</Link>**/}
                </ul>
                <Button id="toggle" onClick={() => setMobile(!mobile)} color="error">
                    {mobile ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
                </Button>
            </Stack>
            <Stack 
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                p={1}
                id="account"
            >
                    <SearchOutlinedIcon sx={{marginRight: "10px"}} onClick={handleClickSearch} id="icon"/>
                    <NotificationsActiveOutlinedIcon sx={{marginRight: "10px"}} id="icon"/>
                    <AccountCircleOutlinedIcon sx={{marginRight: "10px"}} id="icon"/>
            </Stack>
        </Stack>
    )

}

export default Header;