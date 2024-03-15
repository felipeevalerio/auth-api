import { inject, injectable } from "tsyringe";
import { ICreateUserUseCase } from "../application/usecases/user/create-user/create-user-interface";
import type { Request, Response } from 'express';
import { IUpdateUserUseCase } from "../application/usecases/user/update-user/update-user-interface";
import { ISignInUseCase } from "../application/usecases/user/sign-in/sign-in-interface";
import { IDeleteUserUseCase } from "../application/usecases/user/delete-user/delete-user-interface";
import { IGetAllUsersUseCase } from "../application/usecases/user/get-all-users/get-all-users-interface";

@injectable()
export class UserController {
    constructor(
        @inject('IGetAllUsersUseCase') private getAllUsersUseCase: IGetAllUsersUseCase,
        @inject('ICreateUserUseCase') private createUserUseCase: ICreateUserUseCase,
        @inject('ISignInUseCase') private signInUseCase: ISignInUseCase,
        @inject('IUpdateUserUseCase') private updateUserUseCase: IUpdateUserUseCase,
        @inject('IDeleteUserUseCase') private deleteUserUseCase: IDeleteUserUseCase,
    ) { }

    async getAll(req: Request, res: Response) {
        try {
            const users = await this.getAllUsersUseCase.execute();
            return res.status(200).json({users, count: users.length});
        } catch (error) {
            return res.status(400).json({message: 'Error while trying to get all users'});
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { email, password, fullName } = req.body;
            const userId = await this.createUserUseCase.execute({ email, password, fullName });
            return res.status(201).json({ userId: userId, message: "User created successfully" });
        } catch (error) {
            const err = error as Error;
            return res.status(400).json({message: 'Error while trying to create user.', cause: err.message});
        }
    }

    async signIn(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const user = await this.signInUseCase.execute(email, password);
            return res.status(201).json(user);
        } catch (error) {
            const err = error as Error;
            return res.status(401).json({message: 'Error while trying to sign in.', cause: err.message});
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.body;
            const user = await this.deleteUserUseCase.execute(id);
            return res.status(204).json(user);
        } catch (error) {
            return res.status(400).json({message: 'Error while trying to delete user.'});
        }
    }

    async update(req: Request, res: Response) {
        try {
            const body = req.body;
            const user = await this.updateUserUseCase.execute(body);
            return res.status(204).json(user);
        } catch (error) {
            return res.status(400).json({message: 'Error while trying to update user.'});
        }
    }
}