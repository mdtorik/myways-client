import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DashBoard = () => {
  const [blogs, setBlogs] = useState([])
        useEffect(() => {
            fetch('https://sleepy-springs-18567.herokuapp.com/blogs')
                .then(res => res.json())
                .then(data => setBlogs(data));
        }, [])

   
      const  handleDeleteBlog = id =>{
        const proceed = window.confirm('Are you sure wan tot dlete');
        if(proceed){
        const url = `https://sleepy-springs-18567.herokuapp.com/blogs/${id}`;
        fetch(url, {
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
          if(data.deletedCount >0){
            alert('Deleeted Succesfully');
            const remaingBlogs = blogs.filter(blog =>blog._id !== id);
            setBlogs(remaingBlogs);
          }
        })
    }
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Heading</TableCell>
            <TableCell align="right">Documents</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow
              key={blog._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {blog.heading}
              </TableCell>
              <TableCell component="th" scope="row">
                {blog.documents}
              </TableCell>
              <Link to={`/UpdateBlog/${blog._id}`}><button>Update</button></Link>
            <button onClick={()=> handleDeleteBlog(blog._id)}>Delete</button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashBoard;


