import profileIcon from '../../icon/profileIcon.svg';

const template = `
    <aside class="profile_aside">
       {{{link_to_chat}}}
    </a>
    </aside>
    <form class="profile_data">
        <label for='avatar' class="profile_img">
            <img src="${profileIcon}" alt="Иконка пользователя" width="100px" />
            <div class='red_error'>{{error}}</div>
            <input type="file" id="avatar" name="avatar"  accept="image/png, image/jpeg">
        </label>
        <p>{{profileName}}</p>
        <div class="profile_user_data">
            {{{email}}}
            {{{login}}}
            {{{first_name}}}
            {{{second_name}}}
            {{{display_name}}}
            {{{phone}}}
        </div>
        {{{button}}}
    </form>
        `;
export default template ;
