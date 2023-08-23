/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from '../api/AuthAPI.ts';
import Set from '../Utils/Set.ts';
import { EventBus } from './EventBus.ts';
import Block from './Block.ts';
import { IChatList } from '../api/ChatAPI.ts';
import { IResponse } from '../api/UserAPI.ts';
import { IChatMessage } from './Socket.ts';

export interface IState {
    user?: IUser,
    chatList?: { chatList: IChatList[] },
    messages?: { messages: IChatMessage[] },
    currentChat?: { id: number | undefined, title: string, token: string },
    users?: { users: IResponse[] },
    addUser?: { id: number | undefined },
    delUser?: { id: number | undefined },
    chatUsers?: { chatUsers: IResponse[] },
}
enum EVENT {
    UPDATE = 'update',
}
class Storage extends EventBus {
    _state: IState = {
        currentChat: { id: undefined, title: '', token: '' },
    };


    getState() {
        return this._state;
    }
    set(path: string, value: unknown) {
        Set(this._state, path, value);
        this.emit(EVENT.UPDATE, this._state);
    }
}
const store = new Storage();
export function withStore(mapStateToProps: (state: IState) => any) {
    return (Component: typeof Block) => {
        return class extends Component {
            constructor(props: any) {
                super({ ...props, ...mapStateToProps(store.getState()) });

                store.on(EVENT.UPDATE, () => {
                    const propsFromState = mapStateToProps(store.getState());
                    this.setProps(propsFromState);
                });
            }
        };
    };
}

export default store;
