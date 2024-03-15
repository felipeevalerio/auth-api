import "reflect-metadata";
import { container } from "tsyringe"
import { CreateUserUseCase } from "../../application/usecases/user/create-user/create-user"
import { UserController } from "../../controllers/user-controller"
import { UserRepository } from "../repositories/user-repository"
import { ICreateUserUseCase } from "../../application/usecases/user/create-user/create-user-interface"
import { IUserRepository } from "../repositories/user-repository-interface"
import { UpdateUserUseCase } from "../../application/usecases/user/update-user/update-user";
import { IUpdateUserUseCase } from "../../application/usecases/user/update-user/update-user-interface";
import { IDeleteUserUseCase } from "../../application/usecases/user/delete-user/delete-user-interface";
import { DeleteUserUseCase } from "../../application/usecases/user/delete-user/delete-user";
import { ISignInUseCase } from "../../application/usecases/user/sign-in/sign-in-interface";
import { SignInUseCase } from "../../application/usecases/user/sign-in/sign-in";
import { IGetAllUsersUseCase } from "../../application/usecases/user/get-all-users/get-all-users-interface";
import { GetAllUsersUseCase } from "../../application/usecases/user/get-all-users/get-all-users";

container.register<IUserRepository>("IUserRepository", {
    useValue: new UserRepository()
})

container.register<ICreateUserUseCase>("ICreateUserUseCase", {
    useValue: new CreateUserUseCase(container.resolve("IUserRepository"))
})

container.register<IUpdateUserUseCase>("IUpdateUserUseCase", {
    useValue: new UpdateUserUseCase(container.resolve("IUserRepository"))
})

container.register<IDeleteUserUseCase>("IDeleteUserUseCase", {
    useValue: new DeleteUserUseCase(container.resolve("IUserRepository"))
})

container.register<ISignInUseCase>("ISignInUseCase", {
    useValue: new SignInUseCase(container.resolve("IUserRepository"))
})

container.register<IGetAllUsersUseCase>("IGetAllUsersUseCase", {
    useValue: new GetAllUsersUseCase(container.resolve("IUserRepository"))
})

export const userController = container.resolve(UserController)
