import template from './profile.tmpl';
import Block from '../../core/Block';
import { Link } from '../../components/Link';
import { Button } from '../../components/Button';
import AuthController from '../../controllers/AuthController';
import store, { IState, withStore } from '../../core/Store';
import { ProfileImg } from '../../components/ProfileImg';
import profileIcon from '../../icon/profileIcon.svg';


class ProfileBase extends Block {
    constructor() {
        super('main');
    }
    componentDidMount(): void {
        AuthController.fetchUser();
    }
    protected init(): void {
        const user = store.getState().user;
        this.setProps({
            login: user?.login,
            first_name: user?.first_name,
            second_name: user?.second_name,
            display_name: user?.display_name,
        });
        const avatar = (user?.avatar == null) ? profileIcon : 'https://ya-praktikum.tech/api/v2/resources' + user?.avatar;

        this.getContent()?.setAttribute('class', 'profile_layout');
        this.children.link_to_chat = new Link({
            text: ``,
            to: '/messanger',
            className: 'linkImg',
        });
        this.children.profile_img = new ProfileImg({
            path: avatar
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

        return this.compile(template, this.props);
    }
}
//https://ya-praktikum.tech/api/v2/resources${res.avatar}
function mapStateToProps(state: IState) {
    return {...state.user};
}
const Profile = withStore(mapStateToProps)(ProfileBase);
export default Profile;
