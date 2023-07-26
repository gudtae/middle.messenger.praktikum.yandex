import template from './changeProfile.tmpl';
import Block from '../../core/Block';
import { InputError } from '../../components/InputError/index';
import { Button } from '../../components/Button';
import { ProfileData } from '../data/data';
import { submit, focusin, focusout } from '../../core/Validation';
import { Link } from '../../components/Link';

class ChangeProfile extends Block {
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
        this.children.email = new InputError({
            labelFor: 'email',
            labelText: 'Почта',
            inputType: 'email',
            inputName: 'email',
            class: 'profile_user_flex',
            placeholder: ProfileData.email,
            events: {
                focusin,
                focusout
            }
        });
        this.children.login = new InputError({
            labelFor: 'login',
            labelText: 'Логин',
            inputType: 'text',
            inputName: 'login',
            class: 'profile_user_flex',
            placeholder: ProfileData.login,
            events: {
                focusin,
                focusout
            }
        });
        this.children.first_name = new InputError({
            labelFor: 'first_name',
            labelText: 'Имя',
            inputType: 'text',
            inputName: 'first_name',
            class: 'profile_user_flex',
            placeholder: ProfileData.first_name,
            events: {
                focusin,
                focusout
            }
        });
        this.children.second_name = new InputError({
            labelFor: 'second_name',
            labelText: 'Фамилия',
            inputType: 'text',
            inputName: 'secons_name',
            class: 'profile_user_flex',
            placeholder: ProfileData.second_name,
            events: {
                focusin,
                focusout
            }
        });
        this.children.display_name = new InputError({
            labelFor: 'display_name',
            labelText: 'Имя в чате',
            inputType: 'text',
            inputName: 'display_name',
            class: 'profile_user_flex',
            placeholder: ProfileData.display_name,
            events: {
                focusin,
                focusout
            }
        });
        this.children.phone = new InputError({
            labelFor: 'phone',
            labelText: 'Телефон',
            inputType: 'tel',
            inputName: 'phone',
            class: 'profile_user_flex',
            placeholder: ProfileData.phone,
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
        this.children.email.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.login.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.first_name.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.second_name.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.display_name.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.phone.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.button.getContent().setAttribute('class', 'btn_save');
        return this.compile(template, this.props);
    }
}
export default ChangeProfile;
