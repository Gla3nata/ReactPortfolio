const Contacts = () => {
    return ( 
        <main className="section">
            <div className="container">
                <h2 className="title-1">Контакты</h2>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Адрес</h2>
                        <p>Омск, Россия</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79502144141">+7 (950) 214-41-41</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:0207natalya@gmail.com">0207natalya@gmail.com</a></p>
                    </li>
                </ul>
            </div> 
        </main>
     );
}
 
export default Contacts;