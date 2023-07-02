import { Router } from './Utils/Router';
import ChangePassword from './pages/changePassword/ChangePassword';
import ChangeProfile from './pages/changeProfile/ChangeProfile';
import Chat from './pages/chat/Chat';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import SignIn from './pages/signin/SignIn';
import Error500 from './pages/500/Error500';
import Error404 from './pages/404/Error404';

const route = new Router('#app');
route
    .use('/', Login)
    .use('/sign-in', SignIn)
    .use('/messanger', Chat)
    .use('/settings', Profile)
    .use('/settings/change-password', ChangePassword)
    .use('/settings/change-profile', ChangeProfile)
    .use('/500', Error500)
    .use('/404', Error404)
    .start();

