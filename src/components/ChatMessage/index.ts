import template from './chat.tmpl';
import Block from '../../core/Block';
import { IState, withStore } from '../../core/Store';
import { InputError } from '../InputError';
import { Buttonimg } from '../ButtonImg';
import { focusout, messageSbmt } from '../../core/Validation';
import './chatmsg.scss';
import { Button } from '../Button';
import modalDelete from '../ModalDelete';
import ModalAddUser from '../ModalAddUser';
import ModalDelUser from '../ModalDelUser';

class ChatMessageBase extends Block {
    constructor(){
        super('section', {});
    }

    protected init(): void {
        this.getContent()?.setAttribute('class', 'chat_section');
        this.children.modalDeleteChat = new modalDelete();
        this.children.modalAddUser = new ModalAddUser();
        this.children.modalDeleteUser = new ModalDelUser();
        this.children.buttonAddUser = new Button({
            text: '',
            className: 'chat_add_user',
            events: {
                click : () => {
                    this.children.modalAddUser.show();
                }
            }
        });
        this.children.buttonDeleteUser = new Button({
            text: '',
            className: 'chat_delete_user',
            events: {
                click : () => {
                    this.children.modalDeleteUser.show();
                }
            }
        });
        this.children.buttonDeleteChat = new Button({
            text: '',
            className: 'chat_delete_chat',
            events: {
                click : () => {
                    this.children.modalDeleteChat.show();
                }
            }
        });
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
    }
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
function mapStateToProps(state: IState){
    return {...state.chatMessage};
}
const ChatMessage = withStore(mapStateToProps)(ChatMessageBase);
export default ChatMessage;
