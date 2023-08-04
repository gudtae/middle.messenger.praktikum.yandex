/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from '../api/AuthAPI';
import Set from '../Utils/Set';
import { EventBus } from './EventBus';
import Block from './Block';
import { IChatList } from '../api/ChatAPI';

export interface IState {
    user?: IUser,
    chatList?: { chatList: IChatList[] },
    chatMessage?: {chatMessage: string},
    currentChat?: {id: number | undefined },
}
enum EVENT {
    UPDATE = 'update',
}
class Storage extends EventBus {
    _state: IState = {
        currentChat: {id: undefined},
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
