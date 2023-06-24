import profileIcon from '../../icon/profileIcon.svg';
export const template = `
{{#each list}}
<li class="chat_list_li">
    <img src=${profileIcon} alt="chat logo" width="30px" />
    <div class="chat_message_info">
        <div><b>{{chat_title}}</b></div>
        <div class="text_color_light">{{last_message}}</div>
    </div>
    <div class="chat_message_date">
        <p class="text_color_light">{{last_data}}</p>
        {{#if counter}}
        <p class="chat_counter">{{counter}}</p>
        {{/if}}
    </div>
</li>
{{/each}}
`;
