//DAO data access object operation entre database et in memory model,persist in data store 
import {User}from "../types"
export interface UserDao{
      createUser(user:User):void;
      getUser(email:string):User|undefined;
      getUserByUsername(email:string):User|undefined;
      
}
