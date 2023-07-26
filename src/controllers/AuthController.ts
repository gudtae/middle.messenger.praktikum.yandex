import { AuthAPI, ILogin, IRegister} from '../api/AuthAPI';
import Router from '../core/Router';
import store from '../core/Store';

class AuthController {
    private api = new AuthAPI();

    async signin(data: ILogin) {
        try{
            await this.api.signin(data);
            await this.fetchUser();
            Router.go('/settings');
        } catch (error) {
            console.log(error);
        }
    }
    async signup(data: IRegister) {
        try{
            await this.api.signup(data);
            // await this.fetchUser();
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

    async logout() {
        try{
            await this.api.logout();
            store.set('user', null);
            Router.go('/');
        } catch (error) {
            console.log(error);
        }
    }
}
export default new AuthController();
