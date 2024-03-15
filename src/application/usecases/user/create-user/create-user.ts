import { inject, injectable } from "tsyringe";
import { User } from "../../../../domain/entities/User";
import { IUserRepository } from "../../../../infrastructure/repositories/user-repository-interface";
import { CreateUserRequestDTO } from "../../../dtos/create-user-request";
import { ICreateUserUseCase } from "./create-user-interface";

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase { 
    constructor(@inject('IUserRepository') private _userRepository: IUserRepository) { }
    
    async execute(userDto: CreateUserRequestDTO) {
        const userEntity = await User.create(userDto);
        const id = await this._userRepository.create(userEntity);
        return id;
    }
}