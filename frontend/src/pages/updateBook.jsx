import React, {useState} from 'react';
import axios from 'axios';
import { EXPRESS_APP_API_BASE_URL } from '../../config';

const API_BASE_URL = EXPRESS_APP_API_BASE_URL;

function Update() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedYear, setPublishedYear] = useState();
    const [updated, setUpdated] = useState(false);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`${API_BASE_URL}/books/${title}`, {
            title: title,
            author: author,
            publishedYear: publishedYear
        }).then((response) => {
            console.log('Book updated successfully:', response.data);
            setUpdated(true);
        }).catch((error) => {
            console.error('There was an error updating the book!', error);
        });
    }

    return (
        <form>
            <label htmlFor="title">Enter Title: </label>
            <input type="text" id="title" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} ></input>
            <label htmlFor="author">Enter Author: </label>
            <input type="text" id="author" name="author" value={author} onChange={(e)=>{setAuthor(e.target.value)}}></input>
            <label htmlFor="published">Enter the Published Year: </label>
            <input type="number" id="published" name="publishedYear" value={publishedYear} onChange={(e)=>{setPublishedYear(e.target.value)}}></input>
            <button onClick={handleUpdate}>Update</button>
            {!updated && <p>Please verify the details entered</p>}
        </form>
    )
}

const UpdateBook = () => {
    return (
        <div>
            <h1>Update Book</h1>
            <Update />
        </div>
    )
}

export default UpdateBook;
