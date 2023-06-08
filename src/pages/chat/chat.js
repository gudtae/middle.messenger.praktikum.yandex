import profileIcon from "../../icon/profileIcon.svg";
import addPerson from "../../icon/addPerson.svg";
import deletePerson from "../../icon/deletePerson.svg";
import deleteChat from "../../icon/deleteChat.svg";
import clip from "../../icon/clip.svg";
import send from "../../icon/send.svg";
import img from "../../icon/img.png";
export default `
<main class="chat_main">
    <aside class="chat_list">
        <nav>
            <a href="/profile">Профиль</a>
            <input type="search" class="chat_search_input" placeholder="искать" />
        </nav>
        <ul>
            {{#each this}}
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
            </li>
            {{/each}}
        </ul>
    </aside>
    <section class="chat_section">
        <nav>
            <ul class="chat_navigation">
                <li><img src=${profileIcon} alt="chat logo" width="30px" /> <span class="bold white">Андрей</span></li>
                <li class="chat_buttons">
                    <div class="text_color_light fz_small">
                        <img src="${addPerson}" alt="добавить пользователя" width="30px">

                    </div>
                    <div class="text_color_light fz_small">
                        <img src="${deletePerson}" alt="удалить пользователя" width="30px">

                    </div>
                    <div class="text_color_light fz_small">
                        <img src="${deleteChat}" alt="удалить чат" width="30px">

                    </div>
                </li>
            </ul>
        </nav>
        <ul class="chat_message_list">
            <li class="text_color_light ">19 июня </li>
            <li class="chat_send-to-me">Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в
                какой-то момент
                попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты
                летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны,
                так как астронавты с собой забрали только кассеты с пленкой.

                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не
                попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
                <span>11.56</span>
            </li>
            <li class="chat_send-to-me"><img src=${img} alt="картинка"> <span>11.58</span></li>
            <li class="chat_send-by-me">Круто! <span>12.00</span></li>
        </ul>
        <form class="chat_footer">
            <img src=${clip} alt="Добавить файл" width="30px">
            <input type="text" placeholder="Сообщение" class="chat_search_input right" name="message">
            <input type="image" src=${send} class="input_img"></input>
        </form>
    </section>
</main>
`
