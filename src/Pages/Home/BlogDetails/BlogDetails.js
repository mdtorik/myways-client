import { TextareaAutosize, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const {id} = useParams();
    const  [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`https://sleepy-springs-18567.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])
    return (
        <div>
            <h2>{details.heading}</h2>
            <Typography>{details.documents}</Typography>
            <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Comments Here"
            style={{ width: 200 }}
            />
        </div>
    );
};

export default BlogDetails;