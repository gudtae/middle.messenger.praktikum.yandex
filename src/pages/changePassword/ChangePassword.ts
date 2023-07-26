import template from './changePassword.tmpl';
import Block from '../../core/Block';
import { InputError } from '../../components/InputError/index';
import { Button } from '../../components/Button';
import { ProfileData } from '../data/data';
import {focusin, focusout, submit } from '../../core/Validation';
import { Link } from '../../components/Link';

class ChangePassword extends Block {
    constructor() {
        super('main', ProfileData);
    }
    init() {
        this.getContent()?.setAttribute('class', 'profile_layout');
    }
    protected render(): DocumentFragment {
        this.children.link_to_chat = new Link({
            text: ``,
            to: '/messanger',
            className: 'linkImg',
        });
        this.children.old_password = new InputError({
            labelFor: 'old_password',
            labelText: 'Старый пароль',
            inputType: 'password',
            inputName: 'old_password',
            class: 'profile_user_flex',
            events: {
                focusin,
                focusout
            }
        });
        this.children.new_password = new InputError({
            labelFor: 'new_password',
            labelText: 'Новый пароль',
            inputType: 'password',
            inputName: 'new_password',
            class: 'profile_user_flex',
            events: {
                focusin,
                focusout
            }
        });
        this.children.repeat_password = new InputError({
            labelFor: 'repeat_passwors',
            labelText: 'Повторите пароль',
            inputType: 'password',
            inputName: 'repeat_password',
            class: 'profile_user_flex',
            events: {
                focusin,
                focusout
            }
        });
        this.children.button = new Button({
            text: 'Сохранить',
            events: {
                click: submit 
            }
        });
        this.children.old_password.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.new_password.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.repeat_password.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.button.getContent().setAttribute('class', 'btn_save');
        return this.compile(template, this.props);
    }
}
export default ChangePassword ;
