import Handlebars from 'handlebars';

const ChatList = (label_for: string, label_text: string, input_type: string, input_name: string) => Handlebars.compile(`
<img src='' alt="chat logo" width="30px" />
                <div class="chat_message_info">
                    <div><b>{{chat_title}}</b></div>
                    <div class="text_color_light">{{last_message}}</div>
                </div>
                <div class="chat_message_date">
                    <p class="text_color_light">{{last_data}}</p>
                    {{#if counter}}
                    <p class="chat_counter">{{counter}}</p>
                    {{/if}}
`)({ label_for, label_text, input_type, input_name });
export default ChatList;
