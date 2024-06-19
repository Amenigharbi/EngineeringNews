import express from 'express'
const app=express();
app.use(express.json())
const posts:any[]= [];
app.get('/posts',(request,response)=>{
    response.send({posts});
})

app.post('/posts',(req,res)=>{
    const post= req.body;
    posts.push(post);
    res.sendStatus(200);
})
app.listen(3000);
