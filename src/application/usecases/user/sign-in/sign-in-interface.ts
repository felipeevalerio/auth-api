import { User } from "../../../../domain/entities/User";

export interface ISignInUseCase {
    execute(email: string, password: string): Promise<User>;
}