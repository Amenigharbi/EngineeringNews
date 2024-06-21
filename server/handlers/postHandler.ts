import { db } from "../datastore";
import { RequestHandler } from "express-serve-static-core";
import { Post } from "../types";
import { CreatePostRequest, CreatePostResponse, ListPostRequest, ListPostResponse } from "../api";
export type ExpressHandler<Req,Res>=RequestHandler<string,Partial<Res>,Partial<Req>,any>;
export const listPostHandler:ExpressHandler<ListPostRequest,ListPostResponse>=(request,response)=>{
    response.send({posts: db.listPosts()});
};

export const CreatePostHandler:ExpressHandler<CreatePostRequest,CreatePostResponse>=(req,res)=>{
   if(!req.body.title){
    return res.status(400).send({ error: 'title missing' } as Partial<CreatePostResponse>);
   }
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