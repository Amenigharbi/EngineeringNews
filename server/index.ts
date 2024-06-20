import express, { RequestHandler } from 'express'
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
app.listen(3000);
