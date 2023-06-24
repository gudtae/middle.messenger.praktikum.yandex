import template from './changePassword.tmpl';
import Block from '../../components/Utils/Block';
import { Input } from '../../components/Input/index';
import { Button } from '../../components/Button';
import { ProfileData } from '../data/data';

class ChangePassword extends Block {
    constructor() {
        super('main', ProfileData);
    }
    init() {
        this.getContent()?.setAttribute('class', 'profile_layout');
    }
    protected render(): DocumentFragment {
        this.children.old_password = new Input({
            labelFor: 'old_password',
            labelText: 'Старый пароль',
            inputType: 'password',
            inputName: 'old_password',
            class: 'profile_user_flex',
        });
        this.children.new_password = new Input({
            labelFor: 'new_password',
            labelText: 'Новый пароль',
            inputType: 'password',
            inputName: 'new_password',
            class: 'profile_user_flex',
        });
        this.children.repeat_password = new Input({
            labelFor: 'repeat_passwors',
            labelText: 'Повторите пароль',
            inputType: 'password',
            inputName: 'repeat_password',
            class: 'profile_user_flex',
        });
        this.children.button = new Button({
            text: 'Сохранить'
        });
        this.children.old_password.getContent().children[1].setAttribute('class', 'input change_profile');
        this.children.new_password.getContent().children[1].setAttribute('class', 'input change_profile');
        this.children.repeat_password.getContent().children[1].setAttribute('class', 'input change_profile');
        this.children.button.getContent().setAttribute('class', 'btn_save');
        return this.compile(template, this.props);
    }
}
export default ChangePassword;
