import { User } from "../../../../domain/entities/User";

export interface IGetAllUsersUseCase {
    execute(): Promise<User[]>;
}