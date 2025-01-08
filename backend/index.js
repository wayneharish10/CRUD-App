import express from 'express';
import { PORT, mongoDBURL }  from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());
app.use('/books', booksRoute);

console.log("hello");

mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((error) => {
    console.log('Error', error.message);
})
