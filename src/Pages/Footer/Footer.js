import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
const Footer = () => {
    return (
        <Box  sx={{ flexGrow: 1 }}>
            <Container style={{color:'green'}}>
            <Grid sx={{ mt: 8 }} container spacing={3}>
                <Grid item xs>
                <Typography>Company Info
                    Home
                    About
                    Company News
                    Ventures
                    Employee Portal
                    </Typography>
                
                </Grid>
                <Grid item xs={6}>
                <Typography>Our Ventures
                Sarker Automobiles Ltd.
                Sarker Motors Ltd.
                Sarker Properties Ltd.
                Sarker Bricks Ltd.
                Promita Oil & Gas Ltd.
                Sarker Lube & Energy Ltd.
                Sarker Footwear Ltd.
                </Typography>
                </Grid>
                <Grid item xs>
                <Typography>
                Address
                138/1, Tejgaon I/A Dhaka-1208
                09611222000, 16273(Mobile Only)
                admin@runnerbd.com
                www.runnerbd.com
                Webmail: mail.runnerbd.com/owa
                </Typography>
                </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default Footer;