import template from './changeProfile.tmpl';
import Block from '../../components/Utils/Block';
import { Input } from '../../components/Input/index';
import { Button } from '../../components/Button';
import { ProfileData } from '../data/data';

class ChangeProfile extends Block {
    constructor() {
        super('main', ProfileData);
    }
    init() {
        this.getContent()?.setAttribute('class', 'profile_layout');
    }
    protected render(): DocumentFragment {
        this.children.email = new Input({
            labelFor: 'email',
            labelText: 'Почта',
            inputType: 'email',
            inputName: 'email',
            class: 'profile_user_flex',
            placeholder: ProfileData.email,
        });
        this.children.login = new Input({
            labelFor: 'login',
            labelText: 'Логин',
            inputType: 'text',
            inputName: 'login',
            class: 'profile_user_flex',
            placeholder: ProfileData.login,
        });
        this.children.first_name = new Input({
            labelFor: 'first_name',
            labelText: 'Имя',
            inputType: 'text',
            inputName: 'first_name',
            class: 'profile_user_flex',
            placeholder: ProfileData.first_name,
        });
        this.children.second_name = new Input({
            labelFor: 'second_name',
            labelText: 'Фамилия',
            inputType: 'text',
            inputName: 'secons_name',
            class: 'profile_user_flex',
            placeholder: ProfileData.second_name,
        });
        this.children.display_name = new Input({
            labelFor: 'display_name',
            labelText: 'Имя в чате',
            inputType: 'text',
            inputName: 'display_name',
            class: 'profile_user_flex',
            placeholder: ProfileData.display_name,
        });
        this.children.phone = new Input({
            labelFor: 'phone',
            labelText: 'Телефон',
            inputType: 'tel',
            inputName: 'phone',
            class: 'profile_user_flex',
            placeholder: ProfileData.phone,
        });
        this.children.button = new Button({
            text: 'Сохранить'
        });
        this.children.email.getContent().children[1]
            .setAttribute('class', 'input change_profile');
        this.children.login.getContent().children[1].setAttribute('class', 'input change_profile');
        this.children.first_name.getContent().children[1].setAttribute('class', 'input change_profile');
        this.children.second_name.getContent().children[1].setAttribute('class', 'input change_profile');
        this.children.display_name.getContent().children[1].setAttribute('class', 'input change_profile');
        this.children.phone.getContent().children[1].setAttribute('class', 'input change_profile');
        this.children.button.getContent().setAttribute('class', 'btn_save');
        return this.compile(template, this.props);
    }
}
export default ChangeProfile;
