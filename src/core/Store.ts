import { IUser } from '../api/AuthAPI';
import Set from '../utils/Set';
import { EventBus } from './EventBus';
interface IState {
    user?: IUser
}
enum EVENT {
    UPDATE = 'update',
}
class Storage extends EventBus {
    _state: IState = {};

    getState() {
        return this._state;
    }
    set(path: string, value: unknown) {
        Set(this._state, path, value);
        this.emit(EVENT.UPDATE, this._state);
    }
}
const store = new Storage();
export default store;
