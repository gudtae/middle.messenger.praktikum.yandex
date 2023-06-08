export default `
<main class="log-sign-in">
<section class="wrapper wrapper_signin">
    <p>Регистрация</p>
    <label for="email">
        <p class="label">Почта</p> 
        <input type="email" id="email" name="email" class="input">
    </label>
    <label for="login">
        <p class="label">Логин</p> 
        <input type="text" id="login" name="login" class="input">
    </label>
    <label for="first_name">
        <p class="label">Имя</p>
        <input type="text" id="first_name" name="first_name" class="input">
    </label>
    <label for="second_name">
        <p class="label">Фамилия</p>
        <input type="text" id="second_name" name="second_name" class="input">
    </label>
    <label for="phone">
        <p class="label">Телефон</p>
        <input type="tel" id="phone" name="phone" class="input">
    </label>
    <label for="password">
        <p class="label">Пароль</p>
        <input type="password" id="password" name="password" class="input">
    </label>
    <label for="passwordAgain">
        <p class="label">Пароль (введите еще раз)</p>
        <input type="password" id="passwordAgain" name="password" class="input">
    </label>
    <a href="/chat" class="btn">создать аккаунта</a>
    <a href="/" class="link">уже есть аккаунт?</a>
</section>
</main>`