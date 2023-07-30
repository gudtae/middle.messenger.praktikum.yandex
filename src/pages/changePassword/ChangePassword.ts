import template from './changePassword.tmpl';
import Block from '../../core/Block';
import { InputError } from '../../components/InputError/index';
import { Button } from '../../components/Button';
import { checkRegExp, focusin, focusout } from '../../core/Validation';
import { Link } from '../../components/Link';
import store, { IState, withStore } from '../../core/Store';
import UserController from '../../controllers/UserController';
import { isEqual } from '../../Utils/IsEqual';
import profileIcon from '../../icon/profileIcon.svg';
import { ProfileImg } from '../../components/ProfileImg';


class ChangePasswordBase extends Block {
    constructor() {
        super('main');
    }
    init() {
        this.getContent()?.setAttribute('class', 'profile_layout');
        const user = store.getState().user;
        const avatar = (user?.avatar == null) ? profileIcon : 'https://ya-praktikum.tech/api/v2/resources' + user?.avatar;
        this.children.link_to_chat = new Link({
            text: ``,
            to: '/messanger',
            className: 'link_img',
        });
        this.children.profile_img = new ProfileImg({
            path: avatar
        });
        this.children.old_password = new InputError({
            labelFor: 'oldPassword',
            labelText: 'Старый пароль',
            inputType: 'password',
            inputName: 'oldPassword',
            class: 'profile_user_flex',
            placeholder: 'Введите старый пароль',
            events: {
                focusin,
                focusout
            }
        });
        this.children.new_password = new InputError({
            labelFor: 'newPassword',
            labelText: 'Новый пароль',
            inputType: 'password',
            inputName: 'newPassword',
            class: 'profile_user_flex',
            placeholder: 'Введите новый пароль',
            events: {
                focusin,
                focusout
            }
        });
        this.children.repeat_password = new InputError({
            labelFor: 'repeatPasswors',
            labelText: 'Повторите пароль',
            inputType: 'password',
            inputName: 'repeatPassword',
            class: 'profile_user_flex',
            placeholder: 'Повторите пароль',
            events: {
                focusin,
                focusout
            }
        });
        this.children.button = new Button({
            text: 'Сохранить',
            events: {
                click: onSubmit
            }
        });
        this.children.old_password.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.new_password.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.repeat_password.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.button.getContent().setAttribute('class', 'btn_save');

    }
    protected render(): DocumentFragment {

        return this.compile(template, this.props);
    }
}
const onSubmit = async (event: Event): Promise<void> => {
    event.preventDefault();
    const children = document.querySelectorAll('input');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = {};
    children.forEach((child: HTMLInputElement) => {
        const error = child.parentElement?.querySelector('.red_error') as HTMLDivElement;
        const input = checkRegExp(child.name, child.value);
        if (child.value === '' || input) {
            error.textContent = input;
        } else {
            error.textContent = '';
            data[child.name] = child.value;
        }
    });

    if (Object.keys(data).length === children.length) {
        if (isEqual(data.newPassword, data.repeatPassword)) {
            const sendData = {
                oldPassword: data.oldPassword,
                newPassword: data.newPassword,
            };
            try {
                await UserController.changePassword(sendData);
            } catch (error) {
                const errorContent = document.querySelectorAll('.red_error')[0] as HTMLDivElement;
                errorContent.textContent = 'Пароль введен не верно';
            }

        } else {
            const error = document.querySelectorAll('.red_error')[2] as HTMLDivElement;
            error.textContent = 'Пароли не совпадают';
        }

    }
};
function mapStateToProps(state: IState) {
    return { ...state.user };
}
const ChangePassword = withStore(mapStateToProps)(ChangePasswordBase);
export default ChangePassword;
