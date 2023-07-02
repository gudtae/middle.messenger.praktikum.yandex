import Block from '../../Utils/Block';
import { template } from './chatList.tmpl';
interface ChatListProps {
    list: {
        chat_title: string;
        last_message: string;
        last_data: string;
        counter: number;
    }[]
}
export class ChatList extends Block {
    constructor(props: ChatListProps) {
        super('ul', props);
    }
    protected render(): DocumentFragment {
        this.getContent()?.setAttribute('class', 'chat_overflow');
        return this.compile(template, this.props);
    }
}
