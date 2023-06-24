import template from './chat.tmpl';
import Block from '../../components/Utils/Block';
import { ChatList } from '../../components/ChatList';

class Chat extends Block {
    constructor() {
        super('main');
    }
    protected init(): void {
        this.getContent()?.setAttribute('class', 'chat_main');
    }
    protected render(): DocumentFragment {
        this.children.chat_list = new ChatList();
        return this.compile(template, this.props);
    }
}
export default Chat;
