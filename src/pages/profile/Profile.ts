import template from './profile.tmpl';
import Block from '../../core/Block';
import { Link } from '../../components/Link';
import { Button } from '../../components/Button';
import AuthController from '../../controllers/AuthController';

class Profile extends Block {
    constructor() {
        super('main');
    }
    componentDidMount(): void {
        AuthController.fetchUser();
    }
    protected init(): void {
        this.getContent()?.setAttribute('class', 'profile_layout');
        this.children.link_to_chat = new Link({
            text: ``,
            to: '/messanger',
            className: 'linkImg',
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
export default Profile;
