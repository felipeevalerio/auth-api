import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../infrastructure/repositories/user-repository-interface";
import { IDeleteUserUseCase } from "./delete-user-interface";

@injectable()
export class DeleteUserUseCase implements IDeleteUserUseCase { 
    constructor(@inject('IUserRepository') private _userRepository: IUserRepository) { }
    
    async execute(id: string) {
        return await this._userRepository.delete(id);
    }
}