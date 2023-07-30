import { BaseAPI } from './BaseAPI';


export interface ISignUpData {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

export interface ISignInData {
    login: string;
    password: string;
}

export interface IUser {
    id: number;
    email: string;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    avatar: string;
    phone: string;
}

export class AuthAPI extends BaseAPI {
    constructor() {
        super('/auth');
    }

    signin(data: ISignInData): Promise<void> {
        return this.http.post('/signin', JSON.stringify(data));
    }

    signup(data: ISignUpData): Promise<void> {
        return this.http.post('/signup', JSON.stringify(data));
    }

    logout(): Promise<void> {
        return this.http.post('/logout');
    }

    getUser(): Promise<IUser> {
        return this.http.get('/user');
    }
}
