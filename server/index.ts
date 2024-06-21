import express, { ErrorRequestHandler, RequestHandler } from 'express'
import { db } from './datastore';
import { CreatePostHandler, listPostHandler } from './handlers/postHandler';
const app=express();
app.use(express.json())

const requestLoggerMiddleware:RequestHandler=(req,res,next)=>{
    console.log(req.method,req.path,'body: ',req.body);
    next();
}
app.use(requestLoggerMiddleware);
app.use((req,res,next)=>{
    console.log(Date.now());
    next();
});
app.get('/posts',listPostHandler);
app.post('/posts',CreatePostHandler);

const errHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error('Uncaught exception:', err);
    return res.status(500).send('Oops, an error occurred');
};
app.use(errHandler); 
app.listen(3000);
