/* eslint-disable @typescript-eslint/no-explicit-any */
import Block from '../../core/Block.ts';
import template from './modal.tmpl.ts';
import { Button } from '../Button/index.ts';
import store, { IState, withStore } from '../../core/Store.ts';
import ChatController from '../../controllers/ChatController.ts';

class ModalDelUserBase extends Block {
    constructor(props = {}) {
        super('div', {
            ...props, events: {
                click: (e: any) => {
                    if (e.target.nodeName == 'DIV') {
                        store.set('delUser', { id: e.target.id });
                        this.setProps({
                            info: 'Нажмите кнопку для удаления из чата'
                        });
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
                    this.hide();
                    this.setProps({
                        error: ''
                    });
                }
            }
        });
        this.children.buttonSubmit = new Button({
            text: 'Удалить',
            className: 'modal_delete_chat',
            events: {
                click: () => {
                    this.setProps({
                        error: ''
                    });
                    const chat = store.getState().currentChat?.id;
                    const user = store.getState().delUser?.id;
                    if (chat && user) {
                        ChatController.deleteUser({ users: [user], chatId: chat });
                        this.hide();
                        this.setProps({
                            error: ''
                        });
                    } else {
                        this.setProps({
                            error: 'Произошла ошибка'
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
    return { ...state.chatUsers };
}
const ModalDelUser = withStore(mapStateToProps)(ModalDelUserBase);
export default ModalDelUser;
