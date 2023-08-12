import { BaseAPI } from './BaseAPI';
import { IUser } from './AuthAPI';

export interface IProfile {
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string
}
export interface IPassword {
    oldPassword: string,
    newPassword: string
}
export interface IGet{
    id: number
}
export interface IResponse {
    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    avatar: string,
    role?: string
}

export class UserAPI extends BaseAPI {
    constructor() {
        super('/user');
    }
    changeProfile(data: IProfile): Promise<IUser>{
        return this.http.put('/profile', JSON.stringify(data));
    }
    changeAvatar(file: FormData): Promise<IResponse>{
        return this.http.put('/profile/avatar', file);
    }
    changePassword(data: IPassword): Promise<void>{
        return this.http.put('/password', JSON.stringify(data));
    }
    getUser(id: IGet): Promise<IResponse>{
        return this.http.get(`${id.id}`);
    }
    searchUser(login: string): Promise<IResponse[]>{
        return this.http.post('/search', JSON.stringify({login}));
    }
}
