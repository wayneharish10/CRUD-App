import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { EXPRESS_APP_API_BASE_URL } from '../../config';

const API_BASE_URL = EXPRESS_APP_API_BASE_URL;


const ShowBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/books/${id}`)
            .then((response) => {
                setBook(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the book details!', error);
            });
    }, []);

    if (!book) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Published Year: {book.publishedYear}</p>
        </div>
    );
}

export default ShowBook;