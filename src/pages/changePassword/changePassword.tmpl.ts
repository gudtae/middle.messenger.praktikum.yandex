const template = `
    <aside class="profile_aside">
        {{{link_to_chat}}}
    </aside>
    <section class="profile_data">
        {{{profile_img}}}
        <form class="profile_user_data">
            {{{old_password}}}
            {{{new_password}}}
            {{{repeat_password}}}
            {{{button}}}
        </form>
         
    </section>
`;
export default template ;
