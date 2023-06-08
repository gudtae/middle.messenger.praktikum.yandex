import backToChat from "../../icon/backToChat.svg";
import profileIcon from "../../icon/profileIcon.svg";

export default `
<main class="profile_layout">
    <aside class="profile_aside">
        <a href="/chat" class="link"><img src="${backToChat}" alt="Вернуться в чат" width="30px" height="auto">
        </a>
    </aside>
    <section class="profile_data">
        <img src="${profileIcon}" alt="Иконка пользователя" width="100px">
        <p>{{display_name}}</p>
        <ul class="profile_user_data">
            <li class="profile_user_flex"><span>Почта</span> <span class="light_color">{{email}}</span></li>
            <li class="profile_user_flex"> <span>Логин</span> <span class="light_color">{{login}}</span></li>
            <li class="profile_user_flex"><span>Имя</span> <span class="light_color">{{first_name}}</span></li>
            <li class="profile_user_flex"><span>Фамилия</span> <span class="light_color">{{second_name}}</span></li>
            <li class="profile_user_flex"><span>Имя в чате</span> <span class="light_color">{{display_name}}</span></li>
            <li class="profile_user_flex"><span>Телефон</span> <span class="light_color">{{phone}}</span></li>
        </ul>
        <div class="profile_link">
            <a href="/changeProfile" class="link">Изменить данные</a>
            <a href="/changePassword" class="link">Изменить пароль</a>
            <a href="/" class="link red">Выйти</a>
        </div>
    </section>
</main>
`