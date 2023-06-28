import backToChat from '../../icon/backToChat.svg';
import profileIcon from '../../icon/profileIcon.svg';


const template = `
    <aside class="profile_aside">
        <a href="/chat"><img src=${backToChat} alt="Вернуться назад" width="50px" height="auto" />
        </a>
    </aside>
    <section class="profile_data">
        <img src=${profileIcon} alt="Аватарка пользователя" width="100px" />
        <p>{{profileName}}</p>
        <form class="profile_user_data">
            {{{old_password}}}
            {{{new_password}}}
            {{{repeat_password}}}
            {{{button}}}
        </form>
         
    </section>
`;
export default template ;
