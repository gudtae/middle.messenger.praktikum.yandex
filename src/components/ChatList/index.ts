/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Block from '../../core/Block';
import { template } from './chatList.tmpl';
import store, { IState, withStore } from '../../core/Store';
import ChatController from '../../controllers/ChatController';
import './chatList.scss';
import controller from '../../core/Socket';

class ChatListBase extends Block {
    constructor(props = {}) {
        super('ul', {
            ...props,
            events: {
                click: async (e: { target: { id: number } }) => {
                    if (e.target.id) {
                        controller.stop();
                        const idChat = e.target.id;

                        const currentChatTitle = getChatTitleById(+idChat);
                        store.set('currentChat', { id: +idChat, title: currentChatTitle });
                        store.set('messages', { messages: [] });
                        await ChatController.token(+idChat);

                        await ChatController.getChatUsers(e.target.id);

                        const selectedChat = document.getElementById(`${e.target.id}`) as HTMLLIElement;

                        if (selectedChat) {
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
function getChatTitleById(chatId: number) {
    const chat = store.getState().chatList?.chatList.find(chat => chat.id === chatId);
    return chat ? chat.title : 'Чат не найден';
}
function mapStateToProps(state: IState) {
    return { ...state.chatList };
}
const ChatList = withStore(mapStateToProps)(ChatListBase);
export default ChatList;
