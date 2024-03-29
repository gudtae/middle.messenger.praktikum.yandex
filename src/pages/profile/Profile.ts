import template from './profile.tmpl.ts';
import Block from '../../core/Block.ts';
import { Link } from '../../components/Link/index.ts';
import { Button } from '../../components/Button/index.ts';
import AuthController from '../../controllers/AuthController.ts';
import store, { IState, withStore } from '../../core/Store.ts';
import { ProfileImg } from '../../components/ProfileImg/index.ts';
import profileIcon from '../../icon/profileIcon.svg';
import './profile.scss';

class ProfileBase extends Block {
    constructor(props = {}) {
        super('main', {...props});
    }
    protected init(): void {
        AuthController.fetchUser();
        const user = store.getState().user;
        const avatar = (user?.avatar == null) ? profileIcon : 'https://ya-praktikum.tech/api/v2/resources' + user?.avatar;


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
        this.children.link_change_profile = new Link({
            text: 'Изменить данные',
            to: '/settings/change-profile',
            className: 'link'
        });
        this.children.link_change_password = new Link({
            text: 'Изменить пароль',
            to: '/settings/change-password',
            className: 'link'
        });
        this.children.link_logout = new Button({
            text: 'Выйти',
            className: 'link red',
            events: {
                click: () => {
                    AuthController.logout();
                }
            }
        });
    }
    protected render(): DocumentFragment {
        this.getContent()?.setAttribute('class', 'profile_layout');
        return this.compile(template, this.props);
    }
}
function mapStateToProps(state: IState) {
    return { ...state.user };
}
const Profile = withStore(mapStateToProps)(ProfileBase);
export default Profile;
