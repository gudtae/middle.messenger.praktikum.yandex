import backToChat from "../../icon/backToChat.svg";
import profileIcon from "../../icon/profileIcon.svg";


export default `
<main class="profile_layout">
    <aside class="profile_aside">
        <a href="/chat"><img src=${backToChat} alt="Вернуться назад" width="30px" height="auto" />
        </a>

    </aside>
    <section class="profile_data">
            <img src=${profileIcon} alt="profilelogo" width="100px" />
        <p>{{display_name}}</p>
        <div class="profile_user_data">
            <label for="old_password" class="profile_user_flex">
                <p>Старый пароль</p>
                <input type="password" class="input  changeProfile" name="old_password" id="old_password" placeholder={{password}}/>
            </label>
            <label for="new_password" class="profile_user_flex">
                <p>Новый пароль</p>
                <input type="password" name="new_password" id="new_password" class="input changeProfile" />
            </label>
            <label for="repeat_password" class="profile_user_flex">
                <p>Повторите пароль</p>
                <input type="password" name="new_password" id="repeat_password" class="input  changeProfile" />
            </label>
        </div>
         <button class="btn_save">Сохранить</button>
    </section>
</main>
`