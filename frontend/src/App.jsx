import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CreateBook from './pages/createBook';
import UpdateBook from './pages/updateBook';
import DeleteBook from './pages/deleteBook';
import ShowBook from './pages/showBook';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit' element={<UpdateBook />} />
      <Route path='/books/delete' element={<DeleteBook />} />
    </Routes>
  )
}

export default App