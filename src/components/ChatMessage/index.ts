import template from './chat.tmpl.ts';
import Block from '../../core/Block.ts';
import { IState, withStore } from '../../core/Store.ts';
import { InputError } from '../InputError/index.ts';
import { Buttonimg } from '../ButtonImg/index.ts';
import { ERROR_MESSAGES } from '../../core/Validation.ts';
import './chatmsg.scss';
import { Button } from '../Button/index.ts';
import modalDelete from '../ModalDelete/index.ts';
import ModalAddUser from '../ModalAddUser/index.ts';
import ModalDelUser from '../ModalDelUser/index.ts';
import controller from '../../core/Socket.ts';

class ChatMessageBase extends Block {
    constructor(props = {}) {
        super('section', { ...props });
    }

    protected init(): void {

        this.getContent()?.setAttribute('class', 'chat_section');
        this.children.modalDeleteChat = new modalDelete();
        this.children.modalAddUser = new ModalAddUser({});
        this.children.modalDeleteUser = new ModalDelUser({});
        this.children.buttonAddUser = new Button({
            text: '',
            className: 'chat_add_user',
            events: {
                click: () => {
                    this.children.modalAddUser.show();
                }
            }
        });
        this.children.buttonDeleteUser = new Button({
            text: '',
            className: 'chat_delete_user',
            events: {
                click: () => {
                    this.children.modalDeleteUser.show();
                }
            }
        });
        this.children.buttonDeleteChat = new Button({
            text: '',
            className: 'chat_delete_chat',
            events: {
                click: () => {
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
                keyup: (e: KeyboardEvent) => {
                    e.preventDefault();
                    if ((e as KeyboardEvent).code === 'Enter') {
                        const child = document.querySelector('input#message') as HTMLInputElement;
                        if (child) {
                            const error = child.parentElement?.querySelector('.red_error') as HTMLDivElement;
                            const msgToSend = child.value.trim();
                            if (msgToSend === '') {
                                error.textContent = ERROR_MESSAGES.EMPTY;
                                child.value = '';
                            } else {
                                error.textContent = '';
                                controller.send(msgToSend);
                                child.value = '';
                            }
                        }
                    }

                }
            }
        });
        this.children.btnSend = new Buttonimg({
            events: {
                click: (e: MouseEvent) => {
                    e.preventDefault();
                    const child = document.querySelector('input#message') as HTMLInputElement;
                    if (child) {
                        const error = child.parentElement?.querySelector('.red_error') as HTMLDivElement;
                        const msgToSend = child.value.trim();
                        if (msgToSend === '') {
                            error.textContent = ERROR_MESSAGES.EMPTY;
                            child.value = '';
                        } else {
                            error.textContent = '';
                            controller.send(msgToSend);
                            child.value = '';
                        }
                    }
                },
            }
        });


    }
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
function mapStateToProps(state: IState) {

    return { ...state.messages, ...state.currentChat };

}
const ChatMessage = withStore(mapStateToProps)(ChatMessageBase);
export default ChatMessage;
