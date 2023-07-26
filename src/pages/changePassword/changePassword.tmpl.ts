import profileIcon from '../../icon/profileIcon.svg';


const template = `
    <aside class="profile_aside">
        {{{link_to_chat}}}
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
