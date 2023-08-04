import profileIcon from '../../icon/profileIcon.svg';
import clip from '../../icon/clip.svg';
import img from '../../icon/img.png';

const template = `
{{{modalDeleteChat}}}
{{{modalAddUser}}}
{{{modalDeleteUser}}}
<nav>
<ul class="chat_navigation">
    <li><img src=${profileIcon} alt="chat logo" width="30px" /> <span class="bold white">Андрей</span></li>
    <li class="chat_buttons">
        {{{buttonAddUser}}}
        {{{buttonDeleteUser}}}
        {{{buttonDeleteChat}}}
    </li>
</ul>
</nav>
<ul class="chat_message_list">
<li class="text_color_light ">19 июня </li>
<li class="chat_send_to_me">Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в
    какой-то момент
    попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты
    летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны,
    так как астронавты с собой забрали только кассеты с пленкой.

    Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не
    попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
    <span>11.56</span>
</li>
<li class="chat_send_to_me"><img src=${img} alt="картинка"> <span>11.58</span></li>
<li class="chat_send_by_me">Круто! <span>12.00</span></li>
</ul>
<form class="chat_footer">
<label for="file" class="send_file">
    <img src=${clip} alt="Добавить файл" width="30px">
    <input type="file" name="file" id="file">
</label>
{{{message}}}
{{{btnSend}}}
</form>
`;
export default template;
