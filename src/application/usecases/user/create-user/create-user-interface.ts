import { CreateUserRequestDTO } from "../../../dtos/create-user-request";

export interface ICreateUserUseCase {
    execute(user: CreateUserRequestDTO): Promise<string>;
}