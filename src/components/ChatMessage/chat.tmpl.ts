import profileIcon from '../../icon/profileIcon.svg';

const template = `
{{#if id}}
{{{modalDeleteChat}}}
{{{modalAddUser}}}
{{{modalDeleteUser}}}
<nav>
    <ul class="chat_navigation">
        <li><img src=${profileIcon} alt="chat logo" width="30px" /> <span class="bold white">{{title}}</span></li>
        <li class="chat_buttons">
            {{{buttonAddUser}}}
            {{{buttonDeleteUser}}}
            {{{buttonDeleteChat}}}
        </li>
    </ul>
</nav>
<ul class="chat_message_list chat_overflow">
    {{#each messages}}
    <li class="chat_send">
    <div>{{user_id}}</div>
    {{content}}
    <div>{{time}}</div>
    </li>
    {{/each}}
</ul>

<form class="chat_footer">
    {{{message}}}
    {{{btnSend}}}
</form>
{{else}}
<div class="chat_select_chat">Выберите чат</div>
{{/if}}
`;
export default template;
