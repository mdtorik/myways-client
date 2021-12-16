import React, {useRef} from 'react';

const AddBlog = () => {
    const imgRef = useRef();
    const headingRef = useRef();
    const documentsRef = useRef();

    const handleForm =(e) =>{
        const img = imgRef.current.value;
        const heading = headingRef.current.value;
        const documents = documentsRef.current.value;

        const newBlog = {img,heading,documents};
        fetch('http://localhost:5000/blogs',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newBlog)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Blog Added Succesfully');
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Add BLog</h2>
            <form onSubmit={handleForm}>
            <input type="text" ref={imgRef} />
            <input type="text" ref={headingRef} />
            <input type="text" ref={documentsRef} />
            <input type="submit" value="Add" />
            
            </form>
        </div>
    );
};

export default AddBlog;