import Login from './pages/login/Login';
import Signin from './pages/signin/SignIn';
import Profile from './pages/profile/Profile';
import ChangeProfile from './pages/changeProfile/ChangeProfile';
import ChangePassword from './pages/changePassword/ChangePassword';
import Chat from './pages/chat/Chat';
import Error500 from './pages/500/Error500';
import Error404 from './pages/404/Error404';


document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app') as HTMLDivElement;
    const router = () => {
        switch (window.location.pathname) {
            case '/':
                return Login();
            case '/signin':
                return Signin();
            case '/profile':
                return Profile();
            case '/changeProfile':
                return ChangeProfile();
            case '/changePassword':
                return ChangePassword();
            case '/chat':
                return Chat();
            case '/500':
                return Error500();
            default:
                return Error404();
        };
    };
    app.innerHTML = router();
})