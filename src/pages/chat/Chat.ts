import template from './chat.tmpl';
import Block from '../../Utils/Block';
import { ChatList } from '../../components/ChatList';
import { InputError } from '../../components/InputError';
import {focusout, messageSbmt} from '../../Utils/Validation';
import { Buttonimg } from '../../components/ButtonImg';
import { ChatData } from '../data/data';

class Chat extends Block {
    constructor() {
        super('main');
    }
    protected init(): void {
        this.getContent()?.setAttribute('class', 'chat_main');
    }
    protected render(): DocumentFragment {
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
