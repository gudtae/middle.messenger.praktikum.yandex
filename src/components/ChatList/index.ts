import Block from '../../core/Block';
import { template } from './chatList.tmpl';
import store, { IState, withStore } from '../../core/Store';
import ChatController from '../../controllers/ChatController';
import './chatList.scss';

class ChatListBase extends Block {
    constructor(props = {}) {
        super('ul', {
            ...props,
            events: {
                click: async (e: {target: {id: number}}) => {
                    if (e.target.id){
                        store.set('currentChat', {id: e.target.id});
                        await ChatController.getChatUsers(e.target.id);
                        const selectedChat = document.getElementById(`${e.target.id}`) as HTMLLIElement;
                        if (selectedChat){
                            selectedChat.setAttribute('class', 'chat_list_li select');
                        }
                    }
                }
            }

        });
    }
    protected init(): void {
        ChatController.getChats();
    }
    protected render(): DocumentFragment {
        this.getContent()?.setAttribute('class', 'chat_overflow');
        return this.compile(template, this.props);
    }
}
function mapStateToProps(state: IState) {
    return { ...state.chatList };
}
const ChatList = withStore(mapStateToProps)(ChatListBase);
export default ChatList;
