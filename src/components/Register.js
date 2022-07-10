import {Link} from 'react-router-dom';

function Register () {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <form name={`register-form`} className={`form form_task_register`} noValidate>
            <h2 className={`form__title form__title_theme_black form__title_task_register`}>Регистрация</h2>
            <input id="email" name="email" required minLength="2" maxLength="40" placeholder="Email" type="email" className="form__item form__item_theme_black form__item_section_email"/>
            <span className="email-error form__item-error"></span>
            <input id="password" name="password" minLength="2" maxLength="200" placeholder="Пароль" required type="password" className="form__item form__item_theme_black form__item_section_password" />
            <span className="password-error form__item-error"></span>
            <input name="submit-button" type="submit" value='Зарегестрироваться' className="form__button form__button_theme_black form__button_type_register"/> 
            <Link to="/sign-in" className='form__reg-link'>Уже зарегестрированы? Войти</Link>
        </form>
    )
}

export default Register;