import Block from '../../core/Block';
import { template } from './chatList.tmpl';
import { IState, withStore } from '../../core/Store';
import ChatController from '../../controllers/ChatController';
import './chatList.scss';

class ChatListBase extends Block {
    constructor(props = {}) {
        super('ul', { ...props });
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
