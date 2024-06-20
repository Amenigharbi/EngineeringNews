import { LikeDao } from "./LikeDao";
import { postDao } from "./PostDao";
import { UserDao } from "./UserDao";
import { CommentDao } from "./commentDao";
import { InMemoryDataStore } from "./memoryDb";

export interface dataStore extends UserDao,postDao,LikeDao,CommentDao{}
export const db=new InMemoryDataStore();