import { inject, injectable } from "tsyringe";
import { User } from "../../../../domain/entities/User";
import { IUserRepository } from "../../../../infrastructure/repositories/user-repository-interface";
import { IGetAllUsersUseCase } from "./get-all-users-interface";

@injectable()
export class GetAllUsersUseCase implements IGetAllUsersUseCase { 
    constructor(@inject('IUserRepository') private _userRepository: IUserRepository) { }
    
    async execute() {
        return await this._userRepository.getAll();
    }
}