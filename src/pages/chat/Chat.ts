import template from './chat.tmpl';
import Block from '../../core/Block';
import { ChatList } from '../../components/ChatList';
import { InputError } from '../../components/InputError';
import {focusout, messageSbmt} from '../../core/Validation';
import { Buttonimg } from '../../components/ButtonImg';
import { ChatData } from '../data/data';
import { Link } from '../../components/Link';

class Chat extends Block {
    constructor() {
        super('main');
    }
    protected init(): void {
        this.getContent()?.setAttribute('class', 'chat_main');
    }
    protected render(): DocumentFragment {
        this.children.link = new Link({
            text: '',
            to: '/settings',
            className: 'link_profile',
        });
        this.children.chat_list = new ChatList(ChatData);
        this.children.message = new InputError({
            labelFor: 'message',
            inputType: 'text',
            inputName: 'message',
            class: 'chat_message_input',
            placeholder: 'Введите сообщение',
            events: {
                focusout
            }
        });
        this.children.btnSend = new Buttonimg({
            events: {
                click: messageSbmt
            }
        });
        return this.compile(template, this.props);
    }
}
export default Chat ;
