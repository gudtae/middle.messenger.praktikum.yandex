import Handlebars from 'handlebars';
import Login from './pages/login/login.js';
import Signin from './pages/signin/signin.js';
import Profile from './pages/profile/profile.js';
import ChangeProfile from './pages/changeProfile/changeProfile.js';
import ChangePassword from './pages/changePassword/changePassword.js';
import Chat from './pages/chat/chat.js';
import Error404 from './pages/404/404.js';
import Error500 from './pages/500/500.js';
import { ProfileData, ChatData } from './pages/data/data.js';


const app = document.querySelector('#app');

const router = async () => {
    const routes = [
        {
            path: '/',
            render: () => {
                const template = Handlebars.compile(Login);
                const result = template();
                app.innerHTML = result;
            }
        },
        {
            path: '/signin',
            render: () => {
                const template = Handlebars.compile(Signin);
                const result = template();
                app.innerHTML = result;
            }
        },
        {
            path: '/profile',
            render: () => {
                const template = Handlebars.compile(Profile);
                const result = template(ProfileData);
                app.innerHTML = result;
            }
        },
        {
            path: '/changeProfile',
            render: () => {
                const template = Handlebars.compile(ChangeProfile);
                const result = template(ProfileData);
                app.innerHTML = result;
            }
        },
        {
            path: '/changePassword',
            render: () => {
                const template = Handlebars.compile(ChangePassword);
                const result = template(ProfileData);
                app.innerHTML = result;
            }
        },
        {
            path: '/chat',
            render: () => {
                const template = Handlebars.compile(Chat);
                const result = template(ChatData);
                app.innerHTML = result;
            }
        },
        {
            path: '/404',
            render: () => {
                const template = Handlebars.compile(Error404);
                const result = template();
                app.innerHTML = result;
            }
        },
        {
            path: '/500',
            render: () => {
                const template = Handlebars.compile(Error500);
                const result = template();
                app.innerHTML = result;
            }
        },
    ];

    routes.map(route => {
        if (window.location.pathname == route.path) return route.render()
    });

};
const navigation = url => {
    history.pushState(null, null, url);
    router();
};

window.addEventListener("popstate", router);
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("a")) {
            e.preventDefault();
            navigation(e.target.href);
        };

    });
    router();
});
