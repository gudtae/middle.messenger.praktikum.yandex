/* eslint-disable @typescript-eslint/no-explicit-any */
import Block from '../../core/Block';
import template from './modal.tmpl';
import { Button } from '../Button';
import { InputError } from '../InputError';
import { ERROR_MESSAGES, focusout } from '../../core/Validation';
import store, { IState, withStore } from '../../core/Store';
import UserController from '../../controllers/UserController';
import './modalAdd.scss';
import ChatController from '../../controllers/ChatController';

class ModalAddUserBase extends Block {
    constructor(props = {}) {
        super('div', {
            ...props,
            events: {
                click: (e: any) => {
                    if (e.target.nodeName == 'DIV') {
                        store.set('addUser', { id: e.target.id });
                    }
                }
            }
        });
    }
    protected init(): void {
        this.getContent()?.setAttribute('class', 'modal');
        this.children.buttonClose = new Button({
            text: 'X',
            className: 'modal_close',
            events: {
                click: () => {
                    const children = document.querySelector('input#addUser') as HTMLInputElement;
                    if (children) {
                        children.value = '';
                    }
                    this.hide();
                    this.setProps({
                        error: ''
                    });
                    store.set('users', { users: [] });
                }
            }
        });
        this.children.input = new InputError({
            labelFor: 'addUser',
            inputType: 'text',
            inputName: 'addUser',
            class: 'modal_input',
            placeholder: 'Введите логин пользователя',
            events: {
                focusout
            }
        });
        this.children.buttonSubmit = new Button({
            text: 'Найти',
            events: {
                click: () => {
                    const children = document.querySelector('input#addUser') as HTMLInputElement;
                    if (children) {
                        const error = children.parentElement?.querySelector('.red_error') as HTMLDivElement;
                        if (children.value === '') {
                            error.textContent = ERROR_MESSAGES.EMPTY;
                        } else {
                            UserController.searchUser(children.value);
                        }
                    }
                }
            }
        });
        this.children.buttonAddUser = new Button({
            text: 'добавить',
            events: {
                click: () => {
                    this.setProps({
                        error: ''
                    });
                    const chat = store.getState().currentChat?.id;
                    const user = store.getState().addUser?.id;
                    if (chat && user) {
                        ChatController.addUser({ users: [user], chatId: chat });
                        console.log(store.getState());
                        this.hide();
                        this.setProps({
                            error: ''
                        });
                    } else {
                        this.setProps({
                            error: 'Введите логин пользователя'
                        });
                    }

                }
            }
        });

    }
    render() {
        return this.compile(template, { ...this.props });
    }
}
function mapStateToProps(state: IState) {
    return { ...state.users };
}
const ModalAddUser = withStore(mapStateToProps)(ModalAddUserBase);
export default ModalAddUser;
