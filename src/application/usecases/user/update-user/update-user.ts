import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../infrastructure/repositories/user-repository-interface";
import { IUpdateUserUseCase } from "./update-user-interface";
import { UpdateUserRequestDto } from "../../../dtos/update-user-request";

@injectable()
export class UpdateUserUseCase implements IUpdateUserUseCase { 
    constructor(@inject('IUserRepository') private _userRepository: IUserRepository) { }
    
    async execute(user: UpdateUserRequestDto) {
        return await this._userRepository.update(user);
    }
}