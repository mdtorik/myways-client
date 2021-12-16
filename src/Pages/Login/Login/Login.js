import React from 'react';
import  { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert, Grid } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../../images/login.jpg'
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user,loginUser,isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();
    
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault()
    }
    const handleonChange = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleonChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleonChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;