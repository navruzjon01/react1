import React from 'react';
import {Stack, Box} from "@mui/material";
import {Link} from "react-router-dom";
import {logo} from "../../constans";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
    return (
        <Stack direction={"row"}
               alignItems={'center'}
               justifyContent={'space-between'}
               p={'2'}
               sx={{position: "sticky", top: 0, zIndex: 999, backgroundColor: '#bcfa01', p: 1}}>

            <Link to={'/'}>
                <img src={logo} alt="logo" height={50}/>
            </Link>
            <SearchBar/>
            <Box/>
        </Stack>
    );
}

export default Navbar;