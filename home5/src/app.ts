import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { apiRouter } from './router/apiRouter';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(apiRouter);

// app.get('/users', async (req:Request, res:Response) => {
//     try {
//         const users = await getManager().getRepository(User).find({ relations: ['posts'] });
//         console.log(users);
//         res.json(users);
//     } catch (e) {
//         console.log(e);
//     }
// });

app.listen(5500, async () => {
    console.log('Server has started🚀🚀🚀');

    try {
        const connection = await createConnection();
        console.log(connection);
        if (connection) {
            console.log('Database connected');
        }
    } catch (err) {
        if (err) console.log(err);
    }
});
