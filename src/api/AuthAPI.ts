import { BaseAPI } from './BaseAPI';

export interface ILogin {
    login: string;
    password: string;
}
export interface IRegister {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}
export interface IUser{
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
}

export class AuthAPI extends BaseAPI {
    constructor() {
        super('/auth');
    }

    signin(data: ILogin):Promise<void>  {
        return this.http.post('/signin', data);
    }
    signup(data: IRegister): Promise<void> {
        return this.http.post('/signup', data);
    }
    getUser(): Promise<IUser> {
        return this.http.get<IUser>('/user');
    }
    logout(): Promise<void> {
        return this.http.post('/logout');
    }
}
