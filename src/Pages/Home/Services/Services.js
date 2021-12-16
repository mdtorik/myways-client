import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Home/Service/Service';



const Services = () => {
    
        const [services, setServices] = useState([])
        useEffect(() => {
            fetch('http://localhost:5000/blogs')
                .then(res => res.json())
                .then(data => setServices(data));
        }, [])
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography sx={{ fontWeight: 500, m: 5, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                services.map(service => <Service
                    key={service.name}
                    service={service}
                ></Service>)
            }
            </Grid>
            
            </Container>
    </Box>
    );
};

export default Services;