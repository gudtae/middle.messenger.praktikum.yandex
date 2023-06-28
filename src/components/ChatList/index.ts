import Block from '../Utils/Block';
import { template } from './chatList.tmpl';
import { ChatData } from '../../pages/data/data';
export class ChatList extends Block {
    constructor() {
        super('ul', ChatData);
    }
    protected render(): DocumentFragment {
         this.getContent()?.setAttribute('class', 'chat_overflow');
        return this.compile(template, this.props);
    }
}
