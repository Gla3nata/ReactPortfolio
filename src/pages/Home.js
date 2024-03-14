import about from "./../img/about.png";
import html from "./../img/icons/html.svg";
import css from "./../img/icons/css.svg";
import js from "./../img/icons/js.svg";
import figma from "./../img/icons/figma.svg";
import gulp from "./../img/icons/gulp.svg";
import Header from "./../components/header/Header";

const Home = () => {
    return ( 
        <>
        <Header/>
        <main className="section">
            <div className="container">
                <div className="about">
                    <h2 className="title-1">Обо мне</h2>
                    <div className="about__wrapper">
                        <img className="" src={about} alt="about" width="500px"/>
                        <div className="about__text">
                            <p>Итак, меня зовут Наталья и пару лет назад я решила погрузиться в мир создания сайтов .</p>
                            <p>Сейчас, я специализируюсь на front-end разработке.</p>
                            <p>К каждому заказу подхожу с большой ответственностью и любовью, так как хочу сделать проект максимально качественно, 
                                чтобы результат работы нравился мне и заказчику, приносил пользу и новых клиентов. </p>
                        </div>
                    </div>
                    <div className="about__skills skills">
                        <h2 className="title-1">Навыки</h2>
                        <ul className="skills__list">
                            <li className="skills__item">
                                <img className="" src={html} alt="html" width="50px"/><span>HTML</span>
                            </li>
                            <li className="skills__item">
                                <img className="" src={css} alt="css" width="50px"/> <span>css</span>
                            </li>
                            <li className="skills__item">
                                <img className="" src={js} alt="js" width="50px"/><span>JS</span>
                            </li>
                            <li className="skills__item">
                                <img className="" src={figma} alt="figma" height="50px"/><span>figma</span>
                            </li>
                            <li className="skills__item"> <img className="" src={gulp} alt="gulp" height="50px"/><span>gulp</span></li>
                        </ul>
                    </div>
                </div> 
            </div>
        </main>
        </>
        
     );
}
 
export default Home;