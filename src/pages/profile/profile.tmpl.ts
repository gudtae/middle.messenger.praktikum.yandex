import profileIcon from '../../icon/profileIcon.svg';

const template = `
    <aside class="profile_aside">
    {{{link_to_chat}}}
    </aside>
    <section class="profile_data">
        <img src="${profileIcon}" alt="Иконка пользователя" width="100px">
        <p>{{profileName}}</p>
        <ul class="profile_user_data">
            <li class="profile_user_flex">
                <span>Почта</span> <span class="light_color">{{email}}</span>
            </li>
            <li class="profile_user_flex">
                <span>Логин</span> <span class="light_color">{{login}}</span>
            </li>
            <li class="profile_user_flex">
                <span>Имя</span> <span class="light_color">{{first_name}}</span>
            </li>
            <li class="profile_user_flex">
                <span>Фамилия</span> <span class="light_color">{{second_name}}</span>
            </li>
            <li class="profile_user_flex">
                <span>Имя в чате</span> <span class="light_color">{{display_name}}</span>
            </li>
            <li class="profile_user_flex">
                <span>Телефон</span> <span class="light_color">{{phone}}</span>
            </li>
        </ul>
        <div class="profile_link">
            {{{link_change_profile}}}
            {{{link_change_password}}}
            {{{link_logout}}}
        </div>
    </section>
`;
export default template ;
