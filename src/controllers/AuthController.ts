import { AuthAPI, ISignInData, ISignUpData } from '../api/AuthAPI.ts';
import Router from '../core/Router.ts';
import store from '../core/Store.ts';

class AuthController {
    private api = new AuthAPI();

    async signin(data: ISignInData) {
        try {
            await this.api.signin(data);

            await this.fetchUser();

            Router.go('/settings');
        } catch (error) {
            console.log(error);
        }
    }

    async signup(data: ISignUpData) {
        try {
            await this.api.signup(data);

            Router.go('/settings');
        } catch (error) {
            console.log(error);
        }
    }

    async logout() {
        try {
            await this.api.logout();

            store.set('user', undefined);

            Router.go('/');

        } catch (error) {
            console.log(error);
        }
    }

    async fetchUser() {
        try {
            const user = await this.api.getUser();

            store.set('user', user);

        } catch (error) {
            throw error;
        }
    }
}

export default new AuthController();
