import Error404 from './pages/404/Error404';
import Error500 from './pages/500/Error500';
import ChangePassword from './pages/changePassword/ChangePassword';
import ChangeProfile from './pages/changeProfile/ChangeProfile';
import Chat from './pages/chat/Chat';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import SignIn from './pages/signin/SignIn';

document.addEventListener('DOMContentLoaded', (e) => {
    const app = document.querySelector('#app') as HTMLDivElement;
    app.innerHTML = '';
    e.preventDefault();
    let page;
    const router = () => {
        switch (window.location.pathname) {
        case '/':
            page = new Login();
            return page;
        case '/signin':
            page = new SignIn();
            return page;
        case '/profile':
            page = new Profile();
            return page;
        case '/changeProfile':
            page = new ChangeProfile();
            return page;
        case '/changePassword':
            page = new ChangePassword();
            return page;
        case '/chat':
            page = new Chat();
            return page;
        case '/500':
            page = new Error500();
            return page;
        default:
            page = new Error404();
            return page;
        }
    };
    // так как мы гарантировано передаем элемент в Block
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.append(router().getContent()!);
    router().dispatchComponentDidMount();


});
