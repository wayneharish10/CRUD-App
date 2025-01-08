import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { EXPRESS_APP_API_BASE_URL } from '../../config';

const API_BASE_URL = EXPRESS_APP_API_BASE_URL;


export default function Home () {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/books`)
    .then((response) => {
      setBooks(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

    return (
      <>
        <div>
        <h1>Books</h1>
        {books.length === 0 && <p>No books available</p>}
        {books && books.map((book) => (
          console.log(book._id),
          <div key={book._id}>
          <Link to={`/books/details/${book._id}`}>{book.title}</Link>
          <p>{book.author}</p>
          </div>
        ))}
        </div>
       </>
    );
    
}

