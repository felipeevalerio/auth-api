import { User } from "../../domain/entities/User";

export interface IUserRepository {
    create(user: User): Promise<string>;
    login(email: string, password: string): Promise<User>;
    update(user: User): Promise<void>;
    delete(id: string): Promise<void>;
    getAll(): Promise<User[]>
} 