import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {_id, img, heading, documents } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: '100%', height: '250px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {documents.substring(0, 20)}
                    </Typography>
                </CardContent>
            </Card> 
            <Link style={{ textDecoration: 'none'}} to={`/blogDetails/${_id}`}><Button>Read More</Button></Link>
        </Grid>
    );
};

export default Service;


