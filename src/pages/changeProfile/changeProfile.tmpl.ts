const template = `
<aside class="profile_aside">
    {{{link_to_chat}}}
    </a>
</aside>
<aside class="profile_data">
    <form class="form_center profile_form">
        <label for='avatar' class="profile_img">
            {{{profile_img}}}
            <div class='red_error'>{{error}}</div>
            {{{input_avatar}}}
        </label>
    </form>
    <form class="form_center"> 
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
</aside>

`;
export default template ;
