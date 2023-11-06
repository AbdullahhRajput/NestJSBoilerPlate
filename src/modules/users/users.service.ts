import { Injectable } from '@nestjs/common';
import {UsersRepository} from "./users.repository";
import { User } from './schema/users.schema';
import { HydratedDocument } from "mongoose";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';



@Injectable()
export class UsersService {
    constructor(
      private readonly  usersRepository:UsersRepository
    ) {}

  //used for sign up
  async createUser(user: any): Promise<User>
  {
  return this.usersRepository.createUser(user);
  }
  
   //used for login
  async findUserByUsername(username: string): Promise<User | null>
  {
  return this.usersRepository.findUserByUsername(username);
  }

  //update password
  async updatePassword(email: string, password: string): Promise<User | null>
  {
  return this.usersRepository.updateData(email, password);
  }

  //  find email for updatePassword and delete user  and user(authorization)
    async findUserByEmail(email:string): Promise<User | null>
    {
      return this.usersRepository.findUserByEmail(email);
    }


    // delete User
    async deleteUser(email: string): Promise<User | null>
    {
      return this.usersRepository.deleteData(email);
    }


  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

  // async createUser(user: any): Promise<User>
  // {
  // return this.usersRepository.createUser(user);
  // }
}
