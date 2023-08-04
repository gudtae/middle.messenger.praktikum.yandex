import profileIcon from '../../icon/profileIcon.svg';
export const template = `
{{#each chatList}}
<li class="chat_list_li" id="{{id}}">
    {{#if avatar}}
        <img src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="Аватарка чата" width="30px" height="30px">
    {{else}}
        <img src=${profileIcon} alt="Аватарка чата" width="30px" height="30px"/>
    {{/if}}
    <div class="chat_message_info">
        <div><b>{{title}}</b></div>
        <div class="text_color_light">{{content}}</div>
    </div>
    <div class="chat_message_date">
        <p class="text_color_light">{{time}}</p>
        {{#if unread_count}}
        <p class="chat_counter">{{unread_count}}</p>
        {{/if}}
    </div>
</li>
{{/each}}
`;
