import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dtos/create-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findAllUsers(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async createUser(data: CreateUserInput): Promise<User> {
    const user = await this.userRepository.create(data);
    const userSaved = await this.userRepository.save(user);

    if(!userSaved) {
      throw new InternalServerErrorException('Problema para criar um usuário.')
    }

    return userSaved;
  }
}
