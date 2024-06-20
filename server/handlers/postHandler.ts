import { db } from "../datastore";
import { RequestHandler } from "express-serve-static-core";
import { Post } from "../types";
export type ExpressHandler<Req,Res>=RequestHandler<string,Partial<Res>,Partial<Req>,any>;
export const listPostHandler:ExpressHandler<{},{}>=(request,response)=>{
    response.send({posts:db.listPosts()});
}

type CreatePostRequest=Pick<Post,'title'|'url'|'userId'>;
interface CreatePostResponse{
    post:Post;
    
}
export const CreatePostHandler:ExpressHandler<CreatePostRequest,CreatePostResponse>=(req,res)=>{
   
    if(!req.body.title||!req.body.url ||!req.body.userId ){
       return res.sendStatus(400);
    }
    const post:Post={
        id:crypto.randomUUID(),
        postedAt:Date.now(),
        title:req.body.title,
        url:req.body.url,
        userId:req.body.userId,
    }
    db.createPost(post);
    res.sendStatus(200);
}