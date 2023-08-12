import { IGet, IPassword, IProfile, UserAPI } from '../api/UserAPI';
import Router from '../core/Router';
import store from '../core/Store';
import AuthController from './AuthController';


class UserController {
    private api = new UserAPI();
    async changeProfile(data: IProfile) {
        try {
            await this.api.changeProfile(data);
            store.set('user', data);
            Router.go('/settings');
        }
        catch (error) {
            console.log(error);
        }
    }
    async changePassword(data: IPassword) {
        try {
            await this.api.changePassword(data);
            Router.go('/settings');
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async changeAvatar(file: FormData) {
        try {
            await this.api.changeAvatar(file);
            store.set('user.avatar', file);
            AuthController.fetchUser();
            Router.go('/settings');
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getUser(id: IGet) {
        try {
            await this.api.getUser(id);
        } catch (error) {
            console.log(error);
        }
    }
    async searchUser(login: string) {
        try {
            const searchResult = await this.api.searchUser(login);
            store.set('users',{users: searchResult});
        } catch (error) {
            console.log(error);
        }
    }
}
export default new UserController();
