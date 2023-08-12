import profileIcon from '../../icon/profileIcon.svg';
const template = `
<div class="modal_content">
    {{{buttonClose}}}
    <ul>
        {{#each chatUsers}}
        <li class="user_add_list">
            <div class="user_add_blur">
                {{#if avatar}}
                <img src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="Аватарка пользователя" width="30px"
                    height="30px">
                {{else}}
                <img src=${profileIcon} alt="Аватарка чата" width="30px" height="30px" />
                {{/if}}
                <span>{{login}}</span>
            </div>
            <div class="user_add_button red_bg" id="{{id}}">Удалить из чата</div>
        </li>
        {{/each}}
    </ul>
    {{info}}
    <div class='red_error'>{{error}}</div>
    {{{buttonSubmit}}}
</div>
`;
export default template;
