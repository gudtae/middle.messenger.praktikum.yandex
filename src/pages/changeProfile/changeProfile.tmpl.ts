import backToChat from '../../icon/backToChat.svg';
import profileIcon from '../../icon/profileIcon.svg';

const template = `
<main class="profile_layout">
    <aside class="profile_aside">
        <a href="/chat" class="link"><img src="${backToChat}" alt="Вернуться в чат" width="30px" height="auto">
        </a>
    </aside>
    <form class="profile_data">
        <div class="profile_img">
            <input type="image" src="${profileIcon}" alt="Иконка пользователя" width="100px" />
        </div>
        <p>{{display_name}}</p>
        <div class="profile_user_data">
            <label for="email" class="profile_user_flex">
                <p>Почта</p>
                <input type="text" name="email" id="email" class="input changeProfile" placeholder={{email}} />
            </label>
            <label for="login" class="profile_user_flex">
                <p>Логин</p>
                <input type="text" name="login" id="login" class="input changeProfile" placeholder={{login}} />
            </label>
            <label for="first_name" class="profile_user_flex">
                <p>Имя</p>
                <input type="text" name="first_name" id="first_" class="input changeProfile"
                    placeholder={{first_name}} />
            </label>
            <label for="second_name" class="profile_user_flex">
                <p> Фамилия </p>
                <input type="text" name="second_name" id="second_name" class="input changeProfile"
                    placeholder={{second_name}} />
            </label>
            <label for="display_name" class="profile_user_flex">
                <p>Имя в чате</p>
                <input type="text" name="display_name" id="display_name" class="input changeProfile"
                    placeholder={{display_name}} />
            </label>
            <label for="phone" class="profile_user_flex">
                <p>Телефон</p>
                <input type="tel" name="phone" id="phone" class="input changeProfile" placeholder={{phone}} />
            </label>
        </div>
        <button class="btn_save">Сохранить</button>
    </form>
    <main>
        `;
export default template;
