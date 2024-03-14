import "./style.css";

const Header = () => {
    return (
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Привет меня зовут <em>Наталья</em></strong><br/>
                frontend developer
            </h1>
            <div className="header__text">
                <p>с любовью к обучению и творчеству.</p>
            </div>
            <a href="#" className="btn">Скачать резюме</a>
        </div>
       </header>
      );
}
 
export default Header;