function Login () {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <form name={`login-form`} className={`form form_task_login`} noValidate>
            <h2 className={`form__title form__title_theme_black form__title_task_login`}>Вход</h2>
            <input id="email" name="email" required minLength="2" maxLength="40" placeholder="Email" type="email" className="form__item form__item_theme_black form__item_section_email"/>
            <span className="email-error form__item-error"></span>
            <input id="password" name="password" minLength="2" maxLength="200" placeholder="Пароль" required type="password" className="form__item form__item_theme_black form__item_section_password" />
            <span className="password-error form__item-error"></span>
            <input name="submit-button" type="submit" value='Войти' className="form__button form__button_theme_black form__button_type_login"/> 
        </form>
    )
}

export default Login;