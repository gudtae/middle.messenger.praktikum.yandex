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
export interface IResponce {
    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    avatar: string
}

export class UserAPI extends BaseAPI {
    constructor() {
        super('/user');
    }
    changeProfile(data: IProfile): Promise<IUser>{
        return this.http.put('/profile', data);
    }
    changeAvatar(data: string): Promise<IResponce>{
        return this.http.put('/profile/avatar', data);
    }
    changePassword(data: IPassword): Promise<void>{
        return this.http.put('/password', data);
    }
    getUser(data: IGet): Promise<IResponce>{
        return this.http.get(`${data.id}`);
    }
}
