import { IProfile, UserAPI } from '../api/UserAPI';
import store from '../core/Store';


class UserController {
    private api = new UserAPI();
    async changeProfile(data: IProfile) {
        try {
            await this.api.changeProfile(data);
            store.set('user', data);
        }
        catch (error) {
            console.log(error);
        }
    }
}
export default new UserController();
