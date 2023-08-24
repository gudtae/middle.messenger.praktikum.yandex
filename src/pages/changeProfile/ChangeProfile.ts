/* eslint-disable @typescript-eslint/no-explicit-any */
import template from './changeProfile.tmpl.ts';
import Block from '../../core/Block.ts';
import { ProfileImg } from '../../components/ProfileImg';
import profileIcon from '../../icon/profileIcon.svg';
import { InputError } from '../../components/InputError/index.ts';
import { Button } from '../../components/Button/index.ts';
import { Link } from '../../components/Link/index.ts';
import { checkRegExp, focusin, focusout } from '../../core/Validation.ts';
import AuthController from '../../controllers/AuthController.ts';
import UserController from '../../controllers/UserController.ts';
import store, { IState, withStore } from '../../core/Store.ts';
import Router from '../../core/Router.ts';
import './changeProfile.scss';

class ChangeProfileBase extends Block {
    constructor() {
        super('main');
    }
    componentDidMount(): void {
        AuthController.fetchUser();

    }
    init() {
        this.getContent()?.setAttribute('class', 'profile_layout');


        const user = store.getState().user;
        const avatar = (user?.avatar == null) ? profileIcon : `https://ya-praktikum.tech/api/v2/resources${user?.avatar}`;


        this.children.link_to_chat = new Link({
            text: ``,
            to: '/messanger',
            className: 'link_img',
        });
        this.children.profile_img = new ProfileImg({
            path: avatar,
            alt: 'Аватарка пользователя',
            width: '100px',
            height: '100px',
            className: 'user_avatar',
        });
        this.children.input_avatar = new InputError({
            labelFor: 'avatar',
            inputType: 'file',
            inputName: 'avatar',
            class: '',
            accept: 'image/jpeg',
            events: {
                change: async (e: Event): Promise<void> => {
                    const inputTarget = e.target as HTMLInputElement;
                    const files = inputTarget.files as FileList;
                    const file = files?.[0];
                    if (!file) {
                        return;
                    }
                    const form = new FormData();
                    form.append('avatar', file);
                    try {
                        await UserController.changeAvatar(form);
                        AuthController.fetchUser();
                        Router.go('/settings');
                    } catch (error) {
                        const errorLine = inputTarget.parentElement?.querySelector('.red_error') as HTMLDivElement;
                        errorLine.textContent = 'Слишком тяжелая фотография';
                    }
                }
            }
        });
        this.children.email = new InputError({
            labelFor: 'email',
            labelText: 'Почта',
            inputType: 'email',
            inputName: 'email',
            class: 'profile_user_flex',
            placeholder: user?.email,
            value: user?.email,
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
            placeholder: user?.login,
            value: user?.login,
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
            placeholder: user?.first_name,
            value: user?.first_name,
            events: {
                focusin,
                focusout
            }
        });
        this.children.second_name = new InputError({
            labelFor: 'second_name',
            labelText: 'Фамилия',
            inputType: 'text',
            inputName: 'second_name',
            class: 'profile_user_flex',
            placeholder: user?.second_name,
            value: user?.second_name,
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
            placeholder: user?.display_name,
            value: user?.display_name,
            events: {
                focusin,
                focusout
            }
        });
        this.children.phone = new InputError({
            labelFor: 'phone',
            labelText: 'Телефон',
            inputType: 'text',
            inputName: 'phone',
            class: 'profile_user_flex',
            placeholder: user?.phone,
            value: user?.phone,
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
        this.children.email.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.login.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.first_name.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.second_name.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.display_name.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.phone.getContent().children[2].setAttribute('class', 'input change_profile');
        this.children.button.getContent().setAttribute('class', 'btn_save');
    }
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
const onSubmit = (event: Event): void => {
    event.preventDefault();
    const children = document.querySelectorAll('.input.change_profile');
    const data: any = {};
    children.forEach((child: any) => {
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
        UserController.changeProfile(data);
    }
};
function mapStateToProps(state: IState) {
    return { ...state.user };
}
const ChangeProfile = withStore(mapStateToProps)(ChangeProfileBase);
export default ChangeProfile;
