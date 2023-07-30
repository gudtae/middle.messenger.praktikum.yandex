const template = `
    <form class="wrapper">
        <p>Вход</p>
        {{#if error}}<div class="red_error">{{error}}</div>{{/if}}
        {{{input_login}}}
        {{{input_password}}}
        {{{button}}}
        {{{link}}}
    </form>
`;
export default template ;
