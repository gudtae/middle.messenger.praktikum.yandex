import template from './chat.tmpl';
import Block from '../../core/Block';
import ChatList from '../../components/ChatList';
import { Link } from '../../components/Link';
import { IState, withStore } from '../../core/Store';
import { Button } from '../../components/Button';
import './chat.scss'; 
import Modal from '../../components/Modal';
import ChatMessage from '../../components/ChatMessage';

class ChatBase extends Block {
    constructor(props = {}) {
        super('main', {...props});
    }
    protected init(): void {
        this.getContent()?.setAttribute('class', 'chat_main');
        this.children.modal = new Modal({});
        this.children.link = new Link({
            text: '',
            to: '/settings',
            className: 'link_profile',
        });
        this.children.addChat = new Button({
            className: 'chat_add_chat',
            text: '',
            events: {
                click : () => {
                    this.children.modal.show();
                }
            }
        });
        this.children.chat_list = new ChatList({});
        this.children.message = new ChatMessage({});
        
    }
    protected render(): DocumentFragment {
        
        return this.compile(template, this.props);
    }
}

function mapStateToProps(state: IState) {
    return {...state.chatList};
}
const Chat = withStore(mapStateToProps)(ChatBase);
export default Chat ;
