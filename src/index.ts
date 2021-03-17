import express, {Request, Response} from 'express';
import {graphqlHTTP} from 'express-graphql';
import cors from 'cors';
import dotenv from 'dotenv';
import {Schema} from './GraphQL/Schema';
import {enableGraphiQL, getDatabaseUri, getPort} from './utils/env';
import mongoose from 'mongoose';
import {Tag} from './Database/Schemas/TagSchema/TagSchema';
import {Category} from './Database/Schemas/CategorySchema/CategorySchema';
import {Course} from './Database/Schemas/CourseSchema/CourseSchema';
import {Trainer} from './Database/Schemas/TrainerSchema/TrainerSchema';
import {Video} from './Database/Schemas/VideoSchema/VideoSchema';
import {User} from './Database/Schemas/UserSchema/UserSchema';

dotenv.config();
const port = getPort();

const app: express.Application = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    }),
);

app.use('/v1', (request: Request, response: Response) =>
    graphqlHTTP({
        schema: Schema,
        context: {request, response},
        customFormatErrorFn: error => ({
            message: error.message,
            path: error.path,
        }),
        graphiql: enableGraphiQL(),
    })(request, response),
);

mongoose.connect(
    getDatabaseUri(),
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    },
    error => {
        // TODO: Server should retry to connect to database
        if (error) {
            throw new Error('Could not connect to database');
        }

        const category = new Category();
        const course = new Course();
        const tag = new Tag();
        const trainer = new Trainer();
        const user = new User();
        const video = new Video();

        console.log(category, course, tag, trainer, user, video);

        app.listen(port, 'localhost', () => {
            console.log(`🚀 Server started at: http://localhost:${port}/v1`);
        });
    },
);
