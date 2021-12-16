import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateBlog = () => {
    const {id} = useParams();
    const  [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`https://sleepy-springs-18567.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [])

    const handleHeadingChange = (e) =>{
        const updateHeading = e.target.value;
    
        const update = {heading:updateHeading, documents:blog.documents};
        setBlog(update);
    }
    const handleDocumentsChange = (e) =>{
        const updateDocemtns = e.target.value;
    
        const update = {heading:blog.heading, documents:updateDocemtns};
        setBlog(update);
    }


    const handleUpdateBlog = (e) =>{
        const proceed = window.confirm('Are you sure wan tot dlete');
        if(proceed){
        const url = `https://sleepy-springs-18567.herokuapp.com/blogs/${id}`;
        fetch(url, {
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(blog)
        })
        .then(res=>res.json())
        .then(data => {
            if(data.modified >0){
                alert('Update Succesfully');
                setBlog({});
              }
            
        })
    }
        e.preventDefault();
    }
    return (
        <div>
            <h2>Update {blog.heading}</h2>
            <form onSubmit={handleUpdateBlog}>
                <input type="text" name="heading" onChange={handleHeadingChange} value={blog.heading || ''}/>
                <input type="text" name="documents" onChange={handleDocumentsChange} value={blog.documents || ''}/>
                <input type="submit" value="Update" />

            </form>
        </div>
    );
};

export default UpdateBlog;