import logo from './../images/_logo.svg';
function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Лoготип проекта Место" className="header__logo"/>
        </header>
    )
}
export default Header