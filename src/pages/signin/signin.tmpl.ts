const template = `
<main class="login_signin">
    <form class="wrapper wrapper_signin">
        <p>Регистрация</p>
        {{{input_email}}}
        {{{input_login}}}
        {{{input_first_name}}}
        {{{input_second_name}}}
        {{{input_phone}}}
        {{{input_password}}}
        {{{input_password_again}}}
        {{{button}}}
        <a href="/" class="link">уже есть аккаунт?</a>
    </form>
</main>`;
export default template;
