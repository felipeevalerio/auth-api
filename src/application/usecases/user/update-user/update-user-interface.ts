import { UpdateUserRequestDto } from "../../../dtos/update-user-request";

export interface IUpdateUserUseCase {
    execute(request: UpdateUserRequestDto): Promise<void>;
}