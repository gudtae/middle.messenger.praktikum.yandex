import profileIcon from '../../icon/profileIcon.svg';
const template = `
<div class="modal_content">
    {{{buttonClose}}}
    {{{input}}}
    {{{buttonSubmit}}}
    <ul>
        {{#each users}}
        <li class="user_add_list" >
            <div class="user_add_blur">
                {{#if avatar}}
                <img src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="Аватарка пользователя" width="30px"
                    height="30px">
                {{else}}
                <img src=${profileIcon} alt="Аватарка чата" width="30px" height="30px" />
                {{/if}}
                <span>{{login}}</span>
            </div>
            <div class="user_add_button" id="{{id}}">Добавить в чат</div>
        </li>
        {{/each}}
    </ul>
    <div class='red_error'>{{error}}</div>
    {{{buttonAddUser}}}
</div>
`;
export default template;
