import react, {useState} from 'react';
import axios from 'axios';
import { EXPRESS_APP_API_BASE_URL } from '../../config';

const API_BASE_URL = EXPRESS_APP_API_BASE_URL;

function DeleteBook() {
    const [deleted, setDeleted] = useState(false);
    const [title, setTitle] = useState('');
    const handleDelete = (event) => {
        event.preventDefault();
        axios.delete(`${API_BASE_URL}/books/${title}`)
        .then((response)=>{
            console.log('Book deleted successfully:', response.data);
            setDeleted(true);
        }).catch((error) => {
            console.error('There was an error deleting the book!', error);  });
    }
    return (
        <div>
            <input type="text" placeholder="Enter book title" name="title" value={title} onChange={
                (event) => setTitle(event.target.value)
            } />
            <button onClick={handleDelete}>Submit</button>
            {deleted && <p>Book deleted successfully!</p>}
        </div>
    )
}

const deleteBook = () => {
    
    return (
        <div>
        <h1>Delete Book</h1>
        <DeleteBook />
        </div>
    );
}

export default DeleteBook; 