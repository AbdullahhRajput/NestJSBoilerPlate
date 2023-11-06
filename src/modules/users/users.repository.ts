import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from '@nestjs/common';
import {User ,UserDocument} from "./schema/users.schema";
import { HydratedDocument, Model } from "mongoose";



 //used for sign up
@Injectable()
    export class UsersRepository {
        constructor(
            @InjectModel(User.name) private userModel:Model<UserDocument>,
        ) {}
    async createUser(user: User): Promise<any>
    {
    return this.userModel.create(user);
    }

     //used for login
    async findUserByUsername(username: string): Promise<User | null>
    {
        return this.userModel.findOne({
        username,
        })
    }



//update password
async updateData(email: string, password: string): Promise<User | null>
{
    const filter = { email: email };
    const options = { upsert: true };
    const updateDoc = {
    $set: {
        password: password
    },
    };
    return this.userModel.findOneAndUpdate(filter, updateDoc, options);
}


//find email for updatePassword and delete User and token(authorization)
async findUserByEmail(email:string): Promise<User | null>
{
return this.userModel.findOne({
    email,
});
}

// delete User

async deleteData(email: string): Promise<User | null>
{
return this.userModel.findOneAndDelete({
email,
},);
}

}

export class userModel {}