import router from './core/Router.ts';
import ChangePassword from './pages/changePassword/ChangePassword.ts';
import ChangeProfile from './pages/changeProfile/ChangeProfile.ts';
import Chat from './pages/chat/Chat.ts';
import Login from './pages/login/Login.ts';
import Profile from './pages/profile/Profile.ts';
import SignUp from './pages/signup/SignUp.ts';
import Error500 from './pages/500/Error500.ts';
import Error404 from './pages/404/Error404.ts';
import AuthController from './controllers/AuthController.ts';


enum ROUTER {
    LOGIN = '/',
    SIGN_UP = '/sign-up',
    CHAT = '/messanger',
    PROFILE = '/settings',
    CHANGE_PASSWORD = '/settings/change-password',
    CHANGE_PROFILE = '/settings/change-profile',
    ERROR500 = '/500',
    ERROR404 = '/404',
}

window.addEventListener('DOMContentLoaded', async () => {
    router
        .use(ROUTER.LOGIN, Login)
        .use(ROUTER.SIGN_UP, SignUp)
        .use(ROUTER.CHAT, Chat)
        .use(ROUTER.PROFILE, Profile)
        .use(ROUTER.CHANGE_PASSWORD, ChangePassword)
        .use(ROUTER.CHANGE_PROFILE, ChangeProfile)
        .use(ROUTER.ERROR500, Error500)
        .use(ROUTER.ERROR404, Error404);
    
    let isProtected = true;
    switch (window.location.pathname) {
    case ROUTER.LOGIN:
    case ROUTER.SIGN_UP:
        isProtected = false;
        break;
    }

    try {
        await AuthController.fetchUser();
        router.start();
        if (!isProtected){
            router.go(ROUTER.PROFILE);
        }
    } catch (error) {
        console.log(error);
        router.start();
        if(isProtected){
            router.go(ROUTER.LOGIN);
        }
    }
});
