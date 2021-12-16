import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const {user, logOut} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink style={{paddingLeft: 13, textDecoration: 'none'}} to="/"> <Button variant="contained" color="inherit">My Blogs</Button></NavLink>
                </Typography>

               <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/register"><Button sx={{ m: 2 }} variant="contained"  color="inherit">Register</Button></Link>
               {
                   user?.email ?
                   <Box>
                    <NavLink style={{paddingLeft: 13, textDecoration: 'none'}} to="/dashboard"> <Button variant="contained" color="inherit">DashBoard</Button></NavLink>
                    <NavLink style={{paddingLeft: 13, textDecoration: 'none'}} to="/addblog"> <Button variant="contained" color="inherit">Add Blog</Button></NavLink>
                    <Button style={{paddingLeft: 13, textDecoration: 'none'}} onClick={logOut} variant="contained" color="inherit">Logout</Button>  

                   </Box>
                   :
                   <NavLink style={{paddingLeft: 13, textDecoration: 'none'}} to="/login"> <Button variant="contained" color="inherit">Login</Button></NavLink>
               }
                </Toolbar>
            </AppBar>
            </Box>
    );
};

export default Navigation;

// {
//     user?.email ?
//     <Box>
//      <NavLink to="/dashboard"> <Button variant="contained" color="inherit">DashBoard</Button></NavLink>
//      <Button onClick={logOut} variant="contained" color="inherit">Logout</Button>  

//     </Box>
//     :
//     <NavLink to="/login"> <Button variant="contained" color="inherit">Login</Button></NavLink>
// }