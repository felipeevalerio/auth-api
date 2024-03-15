import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../infrastructure/repositories/user-repository-interface";
import { ISignInUseCase } from "./sign-in-interface";

@injectable()
export class SignInUseCase implements ISignInUseCase { 
    constructor(@inject('IUserRepository') private _userRepository: IUserRepository) { }
    
    async execute(email: string, password: string) {
        return await this._userRepository.login(email, password);
    }
}