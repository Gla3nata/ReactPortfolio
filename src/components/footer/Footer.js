import "./style.css";
import vk from "./img/vk.svg";
import wa from "./img/wa.svg";
import gitHub from "./img/gitHub.svg";
import linkedIn from "./img/linkedIn.svg";

const Footer = () => {
    return ( 
        <footer className="footer">
          <div className="container">
              <div className="footer__wrapper">
                  <ul className="social">
                      <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                      <li className="social__item"><a href="https://wa.me/79502144141" title="WhatsApp" target="_blank"> <img src={wa} alt="Link"/></a></li>
                      <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
                      <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                  </ul>
                  <div className="copyright">
                      <p>© 2023 @Gla3nata</p>
                  </div>
              </div>
          </div>
      </footer>
     );
}
 
export default Footer;