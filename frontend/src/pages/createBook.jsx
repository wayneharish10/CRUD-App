import {useState} from 'react';
import axios from 'axios';
import { EXPRESS_APP_API_BASE_URL } from '../../config';

const API_BASE_URL = EXPRESS_APP_API_BASE_URL;

const CreateBook = () => {
    const [books, setBooks] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const title = data.get('title');
        const author = data.get('author');
        const publishedYear = data.get('publishedYear');

        axios.post(`${API_BASE_URL}/books`, {
            title,
            author,
            publishedYear
        })
        .then((response) => {
            console.log('Book created successfully:', response.data);
            setBooks(true);
        })
        .catch((error) => {
            console.error('There was an error creating the book!', error);
        });
    }
    return (
        <div>
        <h1>Create a new book</h1>
        <form onSubmit={handleSubmit}> 
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" />
            <label htmlFor="published">When was it Published?</label>
            <input type="text" id="published" name="publishedYear" />
            <button type="submit">Create</button>
        </form>
        {books && <p>Book created successfully!</p>}
        </div>
    )
}

export default CreateBook;