import express from 'express';
import { Book } from '../models/bookmodel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async(request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
});

router.post('/', async(request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishedYear
        ) {
            return response.status(400).send({
                message: 'Send all fields'
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishedYear: request.body.publishedYear,
        };

        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        response.status(500).send({message: error.message});
    }
});

router.put('/:name', async(request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishedYear
        ) {
            return response.status(400).send({
                message: 'Send all fields'
            });
        }

        const { name } = request.params;

        const result = await Book.findOneAndUpdate({title: name}, request.body, {new: true});
        
        if(!result) {
            return response.status(404).json({message: 'Book not found'});
        }

        return response.status(200).send({message: 'Book updated successfully'});
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:name', async(request, response) => {
    try {
        const { name } = request.params;
        const result = await Book.deleteOne({title: name});
        console.log(result);
        if(result.deletedCount === 0) {
            return response.status(404).json({message: 'Book not found'});
        }
        return response.status(200).send({message: 'Book deleted successfully'});
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
});

export default router;