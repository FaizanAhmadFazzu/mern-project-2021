import express from 'express';
import env from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

env.config();

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.pocaj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`

mongoose.connect(
    CONNECTION_URL,
     {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
}).then(() => {
    console.log('Database Connected');
})

app.use(cors());
app.use(express.json());
// app.use("api/", employeesRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})


